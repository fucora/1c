declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class HmacSHA1KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}