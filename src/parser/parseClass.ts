/// <reference path="../index.d.ts" />

import { get, ensureExists } from "object-path"
import { EXIT_STATUS } from "../const"
import * as lambda from "./lambda"

const UNSUPPORTED_MODIFIERS = [
    "final",
    "native",
    "strictfp",
    "synchronized",
    "transient",
    "volatile",
]

function safeType(type: string, isParameter?: boolean): string {
    if (/>\./.test(type)) return "any"      // XXX<T>.YYY  XXX<T>.YYY<T>
    if (type === "java.lang.String") return isParameter ? `${type} | string` : "string"
    if (type === "java.lang.Boolean") return isParameter ? `${type} | boolean` : "boolean"
    if (/^java\.util\.function\.Consumer<\w+>$/.test(type) && isParameter) {
        return type.replace("Consumer", "Consumer$$$Lambda")
    }

    let classID = type.indexOf("<") < 0 ? type : type.substring(0, type.indexOf("<"))
    if (isParameter && lambda.isLambda[classID]) {
        return `${type} | ${type.replace(new RegExp(`(${classID})`.replace(/\$/g, "\\$")), "$1$$$Lambda")}`
    } else {
        return type
    }
}

function nextToken(ctx: Context): Token {
    let skip = 0
    while (/\s/.test(ctx.source.charAt(ctx.offset + skip))) skip += 1

    let char = ctx.source.charAt(ctx.offset + skip)
    if (["(", ")", ",", ";"].indexOf(char) >= 0) {
        return { value: char, skip: skip + 1 }
    }

    let value = ""
    let openAngles = 0
    while (openAngles > 0 || /\S/.test(ctx.source.charAt(ctx.offset + skip))) {
        char = ctx.source.charAt(ctx.offset + skip)
        if (char === "<") openAngles += 1
        if (char === ">") openAngles -= 1
        if (openAngles <= 0 && ["(", ")", ",", ";"].indexOf(char) >= 0) break
        if (char === "?") {
            skip += 1
            let token = nextToken({ ...ctx, ...{ offset: ctx.offset + skip } })
            if (token.value === "extends" || token.value === "super") {
                // ? extends XXX
                // ? super XXX
                skip += token.skip
                token = nextToken({ ...ctx, ...{ offset: ctx.offset + skip } })
                value += token.value
                skip += token.skip
            } else {
                // <?>
                value += "any"
            }
        } else {
            skip += 1
            value += char
        }
        if (ctx.source.charAt(ctx.offset + skip) === ">" && openAngles === 0) break
    }

    return { value, skip }
}

function parseParameters(ctx: Context, line: string): string {
    let token = nextToken(ctx)
    if (token.value !== "(") return line
    for (let i = 0; true; token = nextToken(ctx)) {
        ctx.offset += token.skip
        if (token.value === "(") {
            line += "("
        } else if (token.value === ")") {
            line += ")"
            break
        } else if (token.value === ",") {
            line += ", "
        } else {
            if (token.value.substring(token.value.length - 3) === "...") {
                line += `...arg${i}: ${token.value.replace("...", "[]")}`
            } else {
                line += `arg${i}: ${safeType(token.value, true)}`
            }
            i += 1
        }
    }

    return line
}

function parseMember(ctx: Context, isInterface: boolean, typeVariable: string): Context {
    let line = "    "
    let type = ""

    let token: Token = { value: "", skip: 0 }
    while (token = nextToken(ctx)) {
        ctx.offset += token.skip
        if (token.value.charAt(0) === "<") {
            typeVariable = token.value
        } else if (UNSUPPORTED_MODIFIERS.indexOf(token.value) >= 0) {
            continue
        } else {
            type = token.value
            break
        }
    }

    // static {}
    if (type === "{}") return { ...ctx, ...{ offset: ctx.offset + 1 } }

    token = nextToken(ctx)
    let member = token.value
    line += member + typeVariable
    ctx.offset += token.skip

    line = parseParameters(ctx, line)
    line += `: ${safeType(type)}`
    ctx.stack.push({ line, type: "MEMBER", name: member })

    while (ctx.source.charAt(ctx.offset) !== "\n") ctx.offset += 1
    return ctx
}

function parseClass(ctx: Context, modifier: string): Context | null {
    let token = nextToken(ctx)
    let isInterface = token.value === "interface"
    if (token.value !== "class" && !isInterface) return null
    ctx.offset += token.skip
    let line = modifier + token.value + " "

    token = nextToken(ctx)
    ctx.offset += token.skip
    let className = token.value
    line += className.replace(/^(\w+\.)+/, "")

    while (token = nextToken(ctx)) {
        line += " " + token.value
        ctx.offset += token.skip
        if (token.value === "{") break
    }
    ctx.stack.push({ line, type: "BEGIN", name: className })

    let memberModifier = ""
    let typeVariable = ""
    while (token = nextToken(ctx)) {
        if (token.value === "}") {
            ctx.offset += token.skip
            ctx.stack.push({ line: "}\n", type: "END", name: className })
            break
        } else if (["public", "protected", "static", "abstract", "final"].indexOf(token.value) >= 0) {
            ctx.offset += token.skip
            memberModifier += (token.value === "final" ? "readonly" : token.value) + " "
        } else if (token.value.charAt(0) === "<") {
            ctx.offset += token.skip
            typeVariable = token.value
        } else if ((token.value === className ||
            className.indexOf(token.value) === 0 && className.charAt(token.value.length) === "<") &&
            ctx.source.charAt(ctx.offset + token.skip) === "("
        ) {
            ctx.offset += token.skip
            line = "    constructor"
            line = parseParameters(ctx, line)
            ctx.stack.push({ line: line.replace(/^(\s+)/, "$1" + memberModifier), type: "CONSTR", name: "" })

            memberModifier = ""
            while (ctx.source.charAt(ctx.offset) !== "\n") ctx.offset += 1
        } else {
            ctx = parseMember(ctx, isInterface, typeVariable)
            if (!ctx) return null
            if (!isInterface) {
                let lastItem = ctx.stack[ctx.stack.length - 1]
                if (lastItem.line.indexOf("(") >= 0) {
                    memberModifier = memberModifier.replace(/\breadonly /, "")
                }
                lastItem.line = lastItem.line.replace(/^(\s+)/, "$1" + memberModifier)
            }
            memberModifier = ""
        }
    }

    return ctx
}

export default function (source: string, pkg: any) {
    let ctx: Context = { source, offset: 0, stack: [] }
    let modifier = ""
    while (ctx.offset < source.length) {
        let token = nextToken(ctx)
        if (token.value === "final" || token.value === "public") {
            ctx.offset += token.skip
        } else if (token.value === "abstract") {
            ctx.offset += token.skip
            modifier += token.value + " "
        } else if (token.value === "class" || token.value === "interface") {
            let ctx1 = parseClass(ctx, modifier)
            if (!ctx1) break
            ctx = ctx1
            modifier = ""
        } else {
            ctx.offset += token.skip
        }
    }

    let buffer: any[] = []
    let ignore = false
    let isInterface = false
    let isAbstractClass = false

    for (let i = 0; i < ctx.stack.length; i++) {
        let item = ctx.stack[i]
        switch (item.type) {
            case "BEGIN":
                buffer = []
                ignore = false
                isInterface = /\binterface\b/.test(item.line)
                isAbstractClass = /\babstract\b/.test(item.line) && !isInterface
                if (item.name.indexOf("-") >= 0) ignore = true
                if (/>\.\w+/.test(item.line)) ignore = true
                if (!ignore) buffer.push(item as never)
                break
            case "CONSTR":
                if (!ignore) buffer.push(item as never)
                break
            case "MEMBER":
                if (!ignore && item.name !== "prototype" && item.line.indexOf("constructor:") < 0) {
                    buffer.push(item as never)
                }
                break
            case "END":
                if (!ignore) {
                    if (!isInterface) buffer.push({ line: "    public static class: java.lang.Class<any>" })
                    buffer.push(item as never)
                    let className = item.name.replace(/^(\w+\.)+/, "")
                    let classID = className.replace(/<.+$/, "")
                    let ns = item.name.substring(0, item.name.length - className.length - 1)
                    ensureExists(pkg, ns, {})
                    if (ns === "java.lang" && className === "Object") {
                        get(pkg, ns, {})[className] = "type Object = any"
                    } else {
                        // remove template arguments
                        let buffer0line = buffer[0].line, templateRegex = /<[^<>]+ extends/
                        while (buffer0line.search(templateRegex) >= 0) {
                            let openAngles = 1, start = buffer0line.search(templateRegex), end = 0
                            for (let i = start + 1; i < buffer0line.length; i++) {
                                if (buffer0line.charAt(i) === "<") {
                                    openAngles += 1
                                } else if (buffer0line.charAt(i) === ">") {
                                    openAngles -= 1
                                    if (openAngles === 0) {
                                        end = i + 1
                                        break
                                    }
                                }
                            }
                            buffer0line = buffer0line.substring(0, start) + buffer0line.substring(end)
                        }
                        // count unimplemented methods of superinterfaces
                        let countUnimplMethods = 0, methodIndex = 1
                        if (isInterface && /\bextends\b/.test(buffer0line)) {
                            buffer0line.substring(
                                buffer0line.indexOf("extends") + "extends".length,
                                buffer0line.indexOf("{")
                            ).split(",").map(i => i.trim()).forEach(name => {
                                name = name.replace(/<.+$/, "")
                                if (lambda.isLambda.hasOwnProperty(name)) {
                                    countUnimplMethods += lambda.isLambda[name]
                                } else if (lambda.isLambda.hasOwnProperty(ns + "." + name)) {
                                    countUnimplMethods += lambda.isLambda[ns + "." + name]
                                } else {
                                    // superinterface has more than 1 unimplemented methods
                                    countUnimplMethods += 2
                                }
                            })
                        }
                        // count unimplemented methods of current interface/class
                        buffer.slice(1).forEach((b, i) => {
                            if (b.line.indexOf("(") >= 0) {
                                if (isInterface && !/\bstatic\b/.test(b.line)) {
                                    countUnimplMethods += 1
                                    methodIndex = i + 1
                                }
                                if (isAbstractClass && /\babstract\b/.test(b.line)) {
                                    countUnimplMethods += 1
                                    methodIndex = i + 1
                                }
                            }
                        })
                        if ((isInterface || isAbstractClass) && countUnimplMethods === 1) {
                            buffer.push({
                                line: buffer[0].line.replace(classID, `${classID}$$$Lambda`)
                                    .replace(/\babstract /, "").replace(/\bclass /, "interface ")
                                    .replace(/\bextends [^{]+$/, "")
                                    .replace(/\bimplements [^{]+$/, "")
                            })
                            buffer.push({ line: buffer[methodIndex].line.replace(/\S[^(]+/, "") })
                            buffer.push({ line: "}\n" })
                            lambda.addLambda(ns + "." + classID)
                        } else if (isInterface && countUnimplMethods === 0) {
                            lambda.addLambda(ns + "." + classID, 0)
                        }
                        get(pkg, ns, {})[className] = buffer.map(b => b.line).join("\n")
                    }
                }
                break
            default:
                console.error(JSON.stringify(item))
                process.exit(EXIT_STATUS.PARSE_CLASS_ERROR)
        }
    }

    return buffer.join("\n")
}
