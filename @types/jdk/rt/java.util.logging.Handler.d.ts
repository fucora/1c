declare namespace java {
    namespace util {
        namespace logging {
            abstract class Handler {
                protected constructor()
                public publish(arg0: java.util.logging.LogRecord): void
                public flush(): void
                public close(): void
                public setFormatter(arg0: java.util.logging.Formatter): void
                public getFormatter(): java.util.logging.Formatter
                public setEncoding(arg0: java.lang.String | string): void
                public getEncoding(): string
                public setFilter(arg0: java.util.logging.Filter | java.util.logging.Filter$$Lambda): void
                public getFilter(): java.util.logging.Filter
                public setErrorManager(arg0: java.util.logging.ErrorManager): void
                public getErrorManager(): java.util.logging.ErrorManager
                protected reportError(arg0: java.lang.String | string, arg1: java.lang.Exception, arg2: int): void
                public setLevel(arg0: java.util.logging.Level): void
                public getLevel(): java.util.logging.Level
                public isLoggable(arg0: java.util.logging.LogRecord): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}