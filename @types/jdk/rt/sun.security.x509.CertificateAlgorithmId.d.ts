declare namespace sun {
    namespace security {
        namespace x509 {
            class CertificateAlgorithmId implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static readonly IDENT: string
                public static readonly NAME: string
                public static readonly ALGORITHM: string
                public constructor(arg0: sun.security.x509.AlgorithmId)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public toString(): string
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): sun.security.x509.AlgorithmId
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}