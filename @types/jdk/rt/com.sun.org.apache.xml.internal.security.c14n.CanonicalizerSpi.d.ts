declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace c14n {
                                abstract class CanonicalizerSpi {
                                    protected reset: boolean
                                    public constructor()
                                    public engineCanonicalize(arg0: byte[]): byte[]
                                    public engineCanonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList): byte[]
                                    public engineCanonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList, arg1: java.lang.String | string): byte[]
                                    public engineGetURI(): string
                                    public engineGetIncludeComments(): boolean
                                    public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>): byte[]
                                    public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
                                    public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node): byte[]
                                    public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
                                    public setWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
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