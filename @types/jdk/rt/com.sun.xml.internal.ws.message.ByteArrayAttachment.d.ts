declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        class ByteArrayAttachment implements com.sun.xml.internal.ws.api.message.Attachment {
                            public constructor(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int, arg4: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: byte[], arg2: java.lang.String | string)
                            public getContentId(): string
                            public getContentType(): string
                            public asByteArray(): byte[]
                            public asDataHandler(): javax.activation.DataHandler
                            public asSource(): javax.xml.transform.Source
                            public asInputStream(): java.io.InputStream
                            public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public writeTo(arg0: javax.xml.soap.SOAPMessage): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}