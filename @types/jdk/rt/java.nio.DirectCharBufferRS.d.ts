declare namespace java {
    namespace nio {
        class DirectCharBufferRS extends java.nio.DirectCharBufferS implements sun.nio.ch.DirectBuffer {
            public slice(): java.nio.CharBuffer
            public duplicate(): java.nio.CharBuffer
            public asReadOnlyBuffer(): java.nio.CharBuffer
            public put(arg0: char): java.nio.CharBuffer
            public put(arg0: int, arg1: char): java.nio.CharBuffer
            public put(arg0: java.nio.CharBuffer): java.nio.CharBuffer
            public put(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
            public compact(): java.nio.CharBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public toString(arg0: int, arg1: int): string
            public subSequence(arg0: int, arg1: int): java.nio.CharBuffer
            public order(): java.nio.ByteOrder
            public subSequence(arg0: int, arg1: int): java.lang.CharSequence
            public static class: java.lang.Class<any>
        }
    }
}