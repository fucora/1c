declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                namespace util {
                                    abstract class Type implements com.sun.org.apache.xalan.internal.xsltc.compiler.Constants {
                                        public static readonly Int: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Real: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Boolean: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly NodeSet: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly String: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly ResultTree: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Reference: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Void: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Object: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly ObjectString: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Node: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Root: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Element: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Attribute: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Text: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Comment: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static readonly Processing_Instruction: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public constructor()
                                        public static newObjectType(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public static newObjectType(arg0: java.lang.Class): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                        public abstract toString(): string
                                        public abstract identicalTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): boolean
                                        public isNumber(): boolean
                                        public implementedAsMethod(): boolean
                                        public isSimple(): boolean
                                        public abstract toJCType(): com.sun.org.apache.bcel.internal.generic.Type
                                        public distanceTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): int
                                        public abstract toSignature(): string
                                        public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): void
                                        public translateToDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
                                        public translateToDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.BooleanType): com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
                                        public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: java.lang.Class): void
                                        public translateFrom(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: java.lang.Class): void
                                        public translateBox(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                        public translateUnBox(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                        public getClassName(): string
                                        public ADD(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public SUB(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public MUL(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public DIV(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public REM(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public NEG(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public LOAD(arg0: int): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public STORE(arg0: int): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public POP(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public GT(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                        public GE(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                        public LT(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                        public LE(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                        public CMP(arg0: boolean): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public DUP(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}