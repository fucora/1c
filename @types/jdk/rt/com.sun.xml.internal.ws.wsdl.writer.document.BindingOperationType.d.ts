declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            namespace document {
                                interface BindingOperationType extends com.sun.xml.internal.txw2.TypedXmlWriter , com.sun.xml.internal.ws.wsdl.writer.document.StartWithExtensionsType {
                                    name(arg0: java.lang.String | string): com.sun.xml.internal.ws.wsdl.writer.document.BindingOperationType
                                    soapOperation(): com.sun.xml.internal.ws.wsdl.writer.document.soap.SOAPOperation
                                    soap12Operation(): com.sun.xml.internal.ws.wsdl.writer.document.soap12.SOAPOperation
                                    fault(): com.sun.xml.internal.ws.wsdl.writer.document.Fault
                                    output(): com.sun.xml.internal.ws.wsdl.writer.document.StartWithExtensionsType
                                    input(): com.sun.xml.internal.ws.wsdl.writer.document.StartWithExtensionsType
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}