declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                namespace util {
                                    class TestGenerator extends com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator {
                                        public constructor(arg0: int, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: com.sun.org.apache.bcel.internal.generic.Type[], arg3: java.lang.String[], arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: com.sun.org.apache.bcel.internal.generic.InstructionList, arg7: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                        public getHandlerIndex(): int
                                        public getIteratorIndex(): int
                                        public setDomIndex(arg0: int): void
                                        public loadDOM(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public loadCurrentNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public loadContextNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeContextNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeCurrentNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeIterator(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public loadIterator(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public getLocalIndex(arg0: java.lang.String | string): int
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