declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                class InterningXmlVisitor implements com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor {
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor)
                                    public startDocument(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx, arg1: javax.xml.namespace.NamespaceContext): void
                                    public endDocument(): void
                                    public startElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public endElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
                                    public text(arg0: java.lang.CharSequence): void
                                    public getContext(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    public getPredictor(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor$TextPredictor
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