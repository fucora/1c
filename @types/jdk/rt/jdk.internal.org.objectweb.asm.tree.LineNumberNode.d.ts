declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        class LineNumberNode extends jdk.internal.org.objectweb.asm.tree.AbstractInsnNode {
                            public line: int
                            public start: jdk.internal.org.objectweb.asm.tree.LabelNode
                            public constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.tree.LabelNode)
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