declare namespace sun {
    namespace net {
        namespace httpserver {
            class FixedLengthInputStream extends sun.net.httpserver.LeftOverInputStream {
                protected readImpl(arg0: byte[], arg1: int, arg2: int): int
                public available(): int
                public markSupported(): boolean
                public mark(arg0: int): void
                public reset(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}