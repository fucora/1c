declare namespace sun {
    namespace misc {
        class UUEncoder extends sun.misc.CharacterEncoder {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: int)
            protected bytesPerAtom(): int
            protected bytesPerLine(): int
            protected encodeAtom(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: byte[], arg2: int, arg3: int): void
            protected encodeLinePrefix(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int): void
            protected encodeLineSuffix(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            protected encodeBufferPrefix(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            protected encodeBufferSuffix(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            public static class: java.lang.Class<any>
        }
    }
}