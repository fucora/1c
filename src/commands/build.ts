import * as fs from "fs"
import { EXIT_STATUS } from "../const"

const autoprefixer = require("autoprefixer")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

function compiler(instdir: string, instmod: string, context: string, watch: boolean) {
    let entry = {}
    // source entry
    if (fs.existsSync(`${context}/src/js/entry`)) {
        fs.readdirSync(`${context}/src/js/entry`).forEach(filename => {
            if (/\.j\.ts$/.test(filename)) {
                let basename = filename.replace(/\.j\.ts$/, "")
                entry[`build/${basename}.js`] = `${context}/src/js/entry/${filename}`
            } else if (/\.tsx?/.test(filename) && !/\.d\.ts$/.test(filename)) {
                let basename = filename.replace(/\.tsx?$/, "")
                entry[`build/assets/js/${basename}.min.js`] = `${context}/src/js/entry/${filename}`
            }
        })
    }
    // test entry
    if (fs.existsSync(`${context}/src/js/test`)) {
        fs.readdirSync(`${context}/src/js/test`).forEach(filename => {
            if (!/^[Tt]est/.test(filename)) return
            if (/\.j\.ts$/.test(filename)) {
                let basename = filename.replace(/\.j\.ts$/, "")
                entry[`build/${basename}.js`] = `${context}/src/js/test/${filename}`
            } else if (/\.tsx?/.test(filename) && !/\.d\.ts$/.test(filename)) {
                let basename = filename.replace(/\.tsx?$/, "")
                entry[`build/assets/js/${basename}.min.js`] = `${context}/src/js/test/${filename}`
            }
        })
    }

    let html = fs.existsSync(`${context}/src/html`) ? (
        fs.readdirSync(`${context}/src/html`).filter(filename => /\.html$/.test(filename))
    ) : []

    let cssLoaders = [{
        loader: "style-loader"
    }, {
        loader: "css-loader",
        options: { minimize: true },
    }, {
        loader: "postcss-loader",
        options: {
            plugins: [
                autoprefixer({ browsers: ["last 3 versions", "safari >= 6", "IE >= 9"] })
            ]
        }
    }]

    return webpack({
        devtool: "source-map",
        context: context,
        resolve: { extensions: [".js", ".ts", ".j.ts", ".tsx"] },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: { path: context, filename: "[name]" },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
            }, {
                test: /\.json$/,
                loader: "json-loader",
            }, {
                test: /^[^!]+\.css$/,
                use: cssLoaders,
            }, {
                test: /^[^!]+\.less$/,
                use: cssLoaders.concat({ loader: "less-loader" })
            }]
        },
        plugins: html.map(filename =>
            new HtmlWebpackPlugin({
                filename: `build/assets/${filename}`,
                template: `${context}/src/html/${filename}`,
                inject: false,
            })
        ).concat([
            new CopyWebpackPlugin([{
                context: `${context}/src/assets`,
                from: "**/*",
                to: `${context}/build/assets`,
            }]),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: watch ? '"development"' : '"production"'
                }
            }),
        ]).concat(watch ? [] : [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
            }),
        ]),
    })
}

export default function (instdir: string, instmod: string, context: string, watch: boolean) {
    if (watch) {
        compiler(instdir, instmod, context, true).watch({ poll: true }, (err, stats) => {
            console.log(stats.toString({ colors: true }))
        })
    } else {
        compiler(instdir, instmod, context, false).run((err, stats) => {
            console.log(stats.toString({ colors: true }))
            if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
        })
    }
}