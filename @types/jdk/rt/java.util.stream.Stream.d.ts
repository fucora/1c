declare namespace java {
    namespace util {
        namespace stream {
            interface Stream<T> extends java.util.stream.BaseStream<T, java.util.stream.Stream<T>> {
                filter(arg0: java.util.function$.Predicate<T>): java.util.stream.Stream<T>
                map<R>(arg0: java.util.function$.Function<T, R>): java.util.stream.Stream<R>
                mapToInt(arg0: java.util.function$.ToIntFunction<T> | java.util.function$.ToIntFunction$$Lambda<T>): java.util.stream.IntStream
                mapToLong(arg0: java.util.function$.ToLongFunction<T> | java.util.function$.ToLongFunction$$Lambda<T>): java.util.stream.LongStream
                mapToDouble(arg0: java.util.function$.ToDoubleFunction<T> | java.util.function$.ToDoubleFunction$$Lambda<T>): java.util.stream.DoubleStream
                flatMap<R>(arg0: java.util.function$.Function<T, java.util.stream.Stream<R>>): java.util.stream.Stream<R>
                flatMapToInt(arg0: java.util.function$.Function<T, java.util.stream.IntStream>): java.util.stream.IntStream
                flatMapToLong(arg0: java.util.function$.Function<T, java.util.stream.LongStream>): java.util.stream.LongStream
                flatMapToDouble(arg0: java.util.function$.Function<T, java.util.stream.DoubleStream>): java.util.stream.DoubleStream
                distinct(): java.util.stream.Stream<T>
                sorted(): java.util.stream.Stream<T>
                sorted(arg0: java.util.Comparator<T>): java.util.stream.Stream<T>
                peek(arg0: java.util.function$.Consumer$$TypeScript<T>): java.util.stream.Stream<T>
                limit(arg0: long): java.util.stream.Stream<T>
                skip(arg0: long): java.util.stream.Stream<T>
                forEach(arg0: java.util.function$.Consumer$$TypeScript<T>): void
                forEachOrdered(arg0: java.util.function$.Consumer$$TypeScript<T>): void
                toArray(): java.lang.Object[]
                toArray<A>(arg0: java.util.function$.IntFunction<A[]> | java.util.function$.IntFunction$$Lambda<A[]>): A[]
                reduce(arg0: T, arg1: java.util.function$.BinaryOperator<T>): T
                reduce(arg0: java.util.function$.BinaryOperator<T>): java.util.Optional<T>
                reduce<U>(arg0: U, arg1: java.util.function$.BiFunction<U, T, U>, arg2: java.util.function$.BinaryOperator<U>): U
                collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.BiConsumer<R, T>, arg2: java.util.function$.BiConsumer<R, R>): R
                collect<R, A>(arg0: java.util.stream.Collector<T, A, R>): R
                min(arg0: java.util.Comparator<T>): java.util.Optional<T>
                max(arg0: java.util.Comparator<T>): java.util.Optional<T>
                count(): long
                anyMatch(arg0: java.util.function$.Predicate<T>): boolean
                allMatch(arg0: java.util.function$.Predicate<T>): boolean
                noneMatch(arg0: java.util.function$.Predicate<T>): boolean
                findFirst(): java.util.Optional<T>
                findAny(): java.util.Optional<T>
                builder<T>(): java.util.stream.Stream$Builder<T>
                empty<T>(): java.util.stream.Stream<T>
                of<T>(arg0: T): java.util.stream.Stream<T>
                of<T>(...arg0: T[]): java.util.stream.Stream<T>
                iterate<T>(arg0: T, arg1: java.util.function$.UnaryOperator<T>): java.util.stream.Stream<T>
                generate<T>(arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$Lambda<T>): java.util.stream.Stream<T>
                concat<T>(arg0: java.util.stream.Stream<T>, arg1: java.util.stream.Stream<T>): java.util.stream.Stream<T>
            }
        }
    }
}