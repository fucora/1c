declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace reflect {
                                class AdaptedAccessor<BeanT, InMemValueT, OnWireValueT> extends com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, OnWireValueT> {
                                    public isAdapted(): boolean
                                    public get(arg0: BeanT): OnWireValueT
                                    public set(arg0: BeanT, arg1: OnWireValueT): void
                                    public getUnadapted(arg0: BeanT): java.lang.Object
                                    public setUnadapted(arg0: BeanT, arg1: java.lang.Object): void
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