declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        interface RootOnlyCodec extends com.sun.xml.internal.ws.api.pipe.Codec {
                            decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet, arg3: com.sun.xml.internal.ws.api.message.AttachmentSet): void
                            decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet, arg3: com.sun.xml.internal.ws.api.message.AttachmentSet): void
                        }
                    }
                }
            }
        }
    }
}