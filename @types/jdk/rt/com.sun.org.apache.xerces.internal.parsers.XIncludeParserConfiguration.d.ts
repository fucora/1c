declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class XIncludeParserConfiguration extends com.sun.org.apache.xerces.internal.parsers.XML11Configuration {
                                protected static readonly ALLOW_UE_AND_NOTATION_EVENTS: string
                                protected static readonly XINCLUDE_FIXUP_BASE_URIS: string
                                protected static readonly XINCLUDE_FIXUP_LANGUAGE: string
                                protected static readonly XINCLUDE_HANDLER: string
                                protected static readonly NAMESPACE_CONTEXT: string
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                protected configurePipeline(): void
                                protected configureXML11Pipeline(): void
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}