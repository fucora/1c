declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class CodeException implements java.lang.Cloneable , com.sun.org.apache.bcel.internal.Constants , com.sun.org.apache.bcel.internal.classfile.Node , java.io.Serializable {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.CodeException)
                                public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getCatchType(): int
                                public getEndPC(): int
                                public getHandlerPC(): int
                                public getStartPC(): int
                                public setCatchType(arg0: int): void
                                public setEndPC(arg0: int): void
                                public setHandlerPC(arg0: int): void
                                public setStartPC(arg0: int): void
                                public toString(): string
                                public toString(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool, arg1: boolean): string
                                public toString(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
                                public copy(): com.sun.org.apache.bcel.internal.classfile.CodeException
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}