declare namespace java {
    namespace util {
        namespace stream {
            abstract class Sink$ChainedLong<E_OUT> implements java.util.stream.Sink$OfLong {
                protected downstream: java.util.stream.Sink<E_OUT>
                public constructor(arg0: java.util.stream.Sink<E_OUT>)
                public begin(arg0: long): void
                public end(): void
                public cancellationRequested(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}