declare namespace java {
    namespace security {
        class Signature$CipherAdapter extends java.security.SignatureSpi {
            protected engineInitVerify(arg0: java.security.PublicKey): void
            protected engineInitSign(arg0: java.security.PrivateKey): void
            protected engineInitSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
            protected engineUpdate(arg0: byte): void
            protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
            protected engineSign(): byte[]
            protected engineVerify(arg0: byte[]): boolean
            protected engineSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
            protected engineGetParameter(arg0: java.lang.String | string): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}