declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                abstract class NetClient implements java.lang.AutoCloseable {
                    public constructor()
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int): sun.security.krb5.internal.NetClient
                    public abstract send(arg0: byte[]): void
                    public abstract receive(): byte[]
                    public abstract close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}