declare namespace java {
    namespace util {
        class Spliterators$LongIteratorSpliterator implements java.util.Spliterator$OfLong {
            public constructor(arg0: java.util.PrimitiveIterator$OfLong, arg1: long, arg2: int)
            public constructor(arg0: java.util.PrimitiveIterator$OfLong, arg1: int)
            public trySplit(): java.util.Spliterator$OfLong
            public forEachRemaining(arg0: java.util.function$.LongConsumer): void
            public tryAdvance(arg0: java.util.function$.LongConsumer): boolean
            public estimateSize(): long
            public characteristics(): int
            public getComparator(): java.util.Comparator<java.lang.Long>
            public forEachRemaining(arg0: java.lang.Object): void
            public tryAdvance(arg0: java.lang.Object): boolean
            public trySplit(): java.util.Spliterator$OfPrimitive
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}