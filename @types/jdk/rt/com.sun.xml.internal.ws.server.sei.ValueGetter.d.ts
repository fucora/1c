declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            abstract class ValueGetter extends java.lang.Enum<com.sun.xml.internal.ws.server.sei.ValueGetter> {
                                public static readonly PLAIN: com.sun.xml.internal.ws.server.sei.ValueGetter
                                public static readonly HOLDER: com.sun.xml.internal.ws.server.sei.ValueGetter
                                public static values(): com.sun.xml.internal.ws.server.sei.ValueGetter[]
                                public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.ws.server.sei.ValueGetter
                                public abstract get(arg0: java.lang.Object): java.lang.Object
                                public static get(arg0: com.sun.xml.internal.ws.model.ParameterImpl): com.sun.xml.internal.ws.server.sei.ValueGetter
                                public static class: java.lang.Class<any>
                            }
                            interface ValueGetter$$Lambda extends java.lang.Enum<com.sun.xml.internal.ws.server.sei.ValueGetter> {
                                (arg0: java.lang.Object): java.lang.Object
                            }
                        }
                    }
                }
            }
        }
    }
}