declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            abstract class CPInstruction extends com.sun.org.apache.bcel.internal.generic.Instruction implements com.sun.org.apache.bcel.internal.generic.TypedInstruction , com.sun.org.apache.bcel.internal.generic.IndexedInstruction {
                                protected index: int
                                protected constructor(arg0: short, arg1: int)
                                public dump(arg0: java.io.DataOutputStream): void
                                public toString(arg0: boolean): string
                                public toString(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
                                protected initFromFile(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence, arg1: boolean): void
                                public getIndex(): int
                                public setIndex(arg0: int): void
                                public getType(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.generic.Type
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}