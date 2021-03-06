declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class KRBSafeBody {
                    public userData: byte[]
                    public timestamp: sun.security.krb5.internal.KerberosTime
                    public usec: java.lang.Integer
                    public seqNumber: java.lang.Integer
                    public sAddress: sun.security.krb5.internal.HostAddress
                    public rAddress: sun.security.krb5.internal.HostAddress
                    public constructor(arg0: byte[], arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: java.lang.Integer, arg4: sun.security.krb5.internal.HostAddress, arg5: sun.security.krb5.internal.HostAddress)
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.KRBSafeBody
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}