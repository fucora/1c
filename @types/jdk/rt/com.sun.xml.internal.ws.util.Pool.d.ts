declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        abstract class Pool<T> {
                            public constructor()
                            public take(): T
                            public recycle(arg0: T): void
                            protected abstract create(): T
                            public static class: java.lang.Class<any>
                        }
                        interface Pool$$Lambda<T> {
                            (): T
                        }
                    }
                }
            }
        }
    }
}