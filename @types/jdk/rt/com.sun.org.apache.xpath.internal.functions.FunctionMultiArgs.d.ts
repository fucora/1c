declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace functions {
                            class FunctionMultiArgs extends com.sun.org.apache.xpath.internal.functions.Function3Args {
                                public constructor()
                                public getArgs(): com.sun.org.apache.xpath.internal.Expression[]
                                public setArg(arg0: com.sun.org.apache.xpath.internal.Expression, arg1: int): void
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                public checkNumberArgs(arg0: int): void
                                protected reportWrongNumberArgs(): void
                                public canTraverseOutsideSubtree(): boolean
                                public callArgVisitors(arg0: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}