declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class ResourceInjector {
                                public static readonly STANDALONE: com.sun.xml.internal.ws.api.server.ResourceInjector
                                public constructor()
                                public abstract inject(arg0: com.sun.xml.internal.ws.api.server.WSWebServiceContext, arg1: java.lang.Object): void
                                public static class: java.lang.Class<any>
                            }
                            interface ResourceInjector$$Lambda {
                                (arg0: com.sun.xml.internal.ws.api.server.WSWebServiceContext, arg1: java.lang.Object): void
                            }
                        }
                    }
                }
            }
        }
    }
}