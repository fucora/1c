declare namespace javax {
    namespace xml {
        namespace validation {
            abstract class SchemaFactory {
                protected constructor()
                public static newInstance(arg0: java.lang.String | string): javax.xml.validation.SchemaFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): javax.xml.validation.SchemaFactory
                public isSchemaLanguageSupported(arg0: java.lang.String | string): boolean
                public getFeature(arg0: java.lang.String | string): boolean
                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                public getErrorHandler(): org.xml.sax.ErrorHandler
                public setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
                public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
                public newSchema(arg0: javax.xml.transform.Source): javax.xml.validation.Schema
                public newSchema(arg0: java.io.File): javax.xml.validation.Schema
                public newSchema(arg0: java.net.URL): javax.xml.validation.Schema
                public newSchema(arg0: javax.xml.transform.Source[]): javax.xml.validation.Schema
                public newSchema(): javax.xml.validation.Schema
                public static class: java.lang.Class<any>
            }
        }
    }
}