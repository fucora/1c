declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
                            class LocateRequestMessage_1_0 extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message_1_0 implements com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage {
                                public getRequestId(): int
                                public getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
                                public read(arg0: org.omg.CORBA.portable.InputStream): void
                                public write(arg0: org.omg.CORBA.portable.OutputStream): void
                                public callback(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.MessageHandler): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}