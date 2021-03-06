declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLExtensible extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject {
                                    getExtensions(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>
                                    getExtensions<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: java.lang.Class<T>): java.lang.Iterable<T>
                                    getExtension<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: java.lang.Class<T>): T
                                    addExtension<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                    areRequiredExtensionsUnderstood<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(): boolean
                                    addNotUnderstoodExtension<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                    getNotUnderstoodExtensions<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(): java.util.List<com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}