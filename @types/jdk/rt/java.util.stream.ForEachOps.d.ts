declare namespace java {
    namespace util {
        namespace stream {
            class ForEachOps {
                public static makeRef<T>(arg0: java.util.function$.Consumer$$Lambda<T>, arg1: boolean): java.util.stream.TerminalOp<T, java.lang.Void>
                public static makeInt<T>(arg0: java.util.function$.IntConsumer, arg1: boolean): java.util.stream.TerminalOp<java.lang.Integer, java.lang.Void>
                public static makeLong<T>(arg0: java.util.function$.LongConsumer, arg1: boolean): java.util.stream.TerminalOp<java.lang.Long, java.lang.Void>
                public static makeDouble<T>(arg0: java.util.function$.DoubleConsumer, arg1: boolean): java.util.stream.TerminalOp<java.lang.Double, java.lang.Void>
                public static class: java.lang.Class<any>
            }
        }
    }
}