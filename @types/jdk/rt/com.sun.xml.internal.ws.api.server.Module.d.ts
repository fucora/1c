declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class Module implements com.sun.xml.internal.ws.api.Component {
                                public constructor()
                                public abstract getBoundEndpoints(): java.util.List<com.sun.xml.internal.ws.api.server.BoundEndpoint>
                                public getSPI<S>(arg0: java.lang.Class<S>): S
                                public static class: java.lang.Class<any>
                            }
                            interface Module$$Lambda implements com.sun.xml.internal.ws.api.Component {
                                (): java.util.List<com.sun.xml.internal.ws.api.server.BoundEndpoint>
                            }
                        }
                    }
                }
            }
        }
    }
}