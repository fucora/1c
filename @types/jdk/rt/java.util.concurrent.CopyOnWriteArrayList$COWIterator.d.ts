declare namespace java {
    namespace util {
        namespace concurrent {
            class CopyOnWriteArrayList$COWIterator<E> implements java.util.ListIterator<E> {
                public hasNext(): boolean
                public hasPrevious(): boolean
                public next(): E
                public previous(): E
                public nextIndex(): int
                public previousIndex(): int
                public remove(): void
                public set(arg0: E): void
                public add(arg0: E): void
                public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<E>): void
                public static class: java.lang.Class<any>
            }
        }
    }
}