declare namespace jdk {
    namespace nashorn {
        namespace tools {
            class Shell {
                public static readonly SUCCESS: int
                public static readonly COMMANDLINE_ERROR: int
                public static readonly COMPILATION_ERROR: int
                public static readonly RUNTIME_ERROR: int
                public static readonly IO_ERROR: int
                public static readonly INTERNAL_ERROR: int
                protected constructor()
                public static main(arg0: java.lang.String[]): void
                public static main(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: java.lang.String[]): int
                protected run(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: java.lang.String[]): int
                protected apply(arg0: jdk.nashorn.internal.runtime.ScriptFunction, arg1: java.lang.Object): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}