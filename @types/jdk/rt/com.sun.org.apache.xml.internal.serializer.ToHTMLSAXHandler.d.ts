declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            class ToHTMLSAXHandler extends com.sun.org.apache.xml.internal.serializer.ToSAXHandler {
                                protected m_escapeSetting: boolean
                                public getOutputFormat(): java.util.Properties
                                public getOutputStream(): java.io.OutputStream
                                public getWriter(): java.io.Writer
                                public indent(arg0: int): void
                                public serialize(arg0: org.w3c.dom.Node): void
                                public setEscaping(arg0: boolean): boolean
                                public setIndent(arg0: boolean): void
                                public setOutputFormat(arg0: java.util.Properties): void
                                public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                public setWriter(arg0: java.io.Writer): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endPrefixMapping(arg0: java.lang.String | string): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public skippedEntity(arg0: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public comment(arg0: char[], arg1: int, arg2: int): void
                                public endCDATA(): void
                                public endDTD(): void
                                public startCDATA(): void
                                public startEntity(arg0: java.lang.String | string): void
                                public endDocument(): void
                                protected closeStartTag(): void
                                public close(): void
                                public characters(arg0: java.lang.String | string): void
                                public constructor(arg0: org.xml.sax.ContentHandler, arg1: java.lang.String | string)
                                public constructor(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ext.LexicalHandler, arg2: java.lang.String | string)
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string): void
                                public endElement(arg0: java.lang.String | string): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public flushPending(): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): boolean
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public reset(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}