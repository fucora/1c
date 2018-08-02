declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11SecretKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
        }
    }
}