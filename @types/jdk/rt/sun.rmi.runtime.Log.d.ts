declare namespace sun {
    namespace rmi {
        namespace runtime {
            abstract class Log {
                public static readonly BRIEF: java.util.logging.Level
                public static readonly VERBOSE: java.util.logging.Level
                public constructor()
                public abstract isLoggable(arg0: java.util.logging.Level): boolean
                public abstract log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
                public abstract log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                public abstract setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public abstract getPrintStream(): java.io.PrintStream
                public static getLog(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): sun.rmi.runtime.Log
                public static getLog(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): sun.rmi.runtime.Log
                public static class: java.lang.Class<any>
            }
        }
    }
}