declare namespace java {
    namespace util {
        class Hashtable<K, V> extends java.util.Dictionary<K, V> implements java.util.Map<K, V> , java.lang.Cloneable , java.io.Serializable {
            public constructor(arg0: int, arg1: float)
            public constructor(arg0: int)
            public constructor()
            public constructor(arg0: java.util.Map<K, V>)
            public size(): int
            public isEmpty(): boolean
            public keys(): java.util.Enumeration<K>
            public elements(): java.util.Enumeration<V>
            public contains(arg0: java.lang.Object): boolean
            public containsValue(arg0: java.lang.Object): boolean
            public containsKey(arg0: java.lang.Object): boolean
            public get(arg0: java.lang.Object): V
            protected rehash(): void
            public put(arg0: K, arg1: V): V
            public remove(arg0: java.lang.Object): V
            public putAll(arg0: java.util.Map<K, V>): void
            public clear(): void
            public clone(): java.lang.Object
            public toString(): string
            public keySet(): java.util.Set<K>
            public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
            public values(): java.util.Collection<V>
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public getOrDefault(arg0: java.lang.Object, arg1: V): V
            public forEach(arg0: java.util.function$.BiConsumer<K, V>): void
            public replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
            public putIfAbsent(arg0: K, arg1: V): V
            public remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
            public replace(arg0: K, arg1: V, arg2: V): boolean
            public replace(arg0: K, arg1: V): V
            public computeIfAbsent(arg0: K, arg1: java.util.function$.Function<K, V>): V
            public computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
            public compute(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
            public merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<V, V, V>): V
            public static class: java.lang.Class<any>
        }
    }
}