declare namespace sun {
    namespace security {
        namespace provider {
            class DSAKeyPairGenerator extends java.security.KeyPairGenerator {
                public initialize(arg0: int, arg1: java.security.SecureRandom): void
                public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                public generateKeyPair(): java.security.KeyPair
                public static class: java.lang.Class<any>
            }
        }
    }
}