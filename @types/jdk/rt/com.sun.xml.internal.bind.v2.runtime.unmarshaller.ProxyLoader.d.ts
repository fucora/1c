declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                abstract class ProxyLoader extends com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader {
                                    public constructor()
                                    public startElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    protected abstract selectLoader(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader
                                    public leaveElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public static class: java.lang.Class<any>
                                }
                                interface ProxyLoader$$Lambda extends com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader {
                                    (arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}