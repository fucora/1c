declare namespace javax {
    namespace print {
        abstract class StreamPrintServiceFactory {
            public constructor()
            public static lookupStreamPrintServiceFactories(arg0: javax.print.DocFlavor, arg1: java.lang.String | string): javax.print.StreamPrintServiceFactory[]
            public abstract getOutputFormat(): string
            public abstract getSupportedDocFlavors(): javax.print.DocFlavor[]
            public abstract getPrintService(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.print.StreamPrintService
            public static class: java.lang.Class<any>
        }
    }
}