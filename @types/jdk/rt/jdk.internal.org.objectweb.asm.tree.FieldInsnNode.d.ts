declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        class FieldInsnNode extends jdk.internal.org.objectweb.asm.tree.AbstractInsnNode {
                            public owner: string
                            public name: string
                            public desc: string
                            public constructor(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                            public setOpcode(arg0: int): void
                            public getType(): int
                            public accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                            public clone(arg0: java.util.Map<jdk.internal.org.objectweb.asm.tree.LabelNode, jdk.internal.org.objectweb.asm.tree.LabelNode>): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}