declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
                            class AOMEntry extends com.sun.corba.se.spi.orbutil.fsm.FSMImpl {
                                public static INVALID: com.sun.corba.se.spi.orbutil.fsm.State
                                public static INCARN: com.sun.corba.se.spi.orbutil.fsm.State
                                public static VALID: com.sun.corba.se.spi.orbutil.fsm.State
                                public static ETHP: com.sun.corba.se.spi.orbutil.fsm.State
                                public static ETH: com.sun.corba.se.spi.orbutil.fsm.State
                                public static DESTROYED: com.sun.corba.se.spi.orbutil.fsm.State
                                public constructor(arg0: com.sun.corba.se.impl.oa.poa.POAImpl)
                                public startEtherealize(arg0: java.lang.Thread | java.lang.Thread$$Lambda): void
                                public etherealizeComplete(): void
                                public incarnateComplete(): void
                                public incarnateFailure(): void
                                public activateObject(): void
                                public enter(): void
                                public exit(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}