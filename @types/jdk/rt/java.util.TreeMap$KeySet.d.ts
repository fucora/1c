declare namespace java {
    namespace util {
        class TreeMap$KeySet<E> extends java.util.AbstractSet<E> implements java.util.NavigableSet<E> {
            public iterator(): java.util.Iterator<E>
            public descendingIterator(): java.util.Iterator<E>
            public size(): int
            public isEmpty(): boolean
            public contains(arg0: java.lang.Object): boolean
            public clear(): void
            public lower(arg0: E): E
            public floor(arg0: E): E
            public ceiling(arg0: E): E
            public higher(arg0: E): E
            public first(): E
            public last(): E
            public comparator(): java.util.Comparator<E>
            public pollFirst(): E
            public pollLast(): E
            public remove(arg0: java.lang.Object): boolean
            public subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): java.util.NavigableSet<E>
            public headSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
            public tailSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
            public subSet(arg0: E, arg1: E): java.util.SortedSet<E>
            public headSet(arg0: E): java.util.SortedSet<E>
            public tailSet(arg0: E): java.util.SortedSet<E>
            public descendingSet(): java.util.NavigableSet<E>
            public spliterator(): java.util.Spliterator<E>
            public static class: java.lang.Class<any>
        }
    }
}