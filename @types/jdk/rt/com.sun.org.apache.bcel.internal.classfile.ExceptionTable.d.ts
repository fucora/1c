declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class ExceptionTable extends com.sun.org.apache.bcel.internal.classfile.Attribute {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.ExceptionTable)
                                public constructor(arg0: int, arg1: int, arg2: int[], arg3: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getExceptionIndexTable(): int[]
                                public getNumberOfExceptions(): int
                                public getExceptionNames(): java.lang.String[]
                                public setExceptionIndexTable(arg0: int[]): void
                                public toString(): string
                                public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}