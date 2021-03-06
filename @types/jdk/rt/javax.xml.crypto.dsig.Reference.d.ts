declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface Reference extends javax.xml.crypto.URIReference , javax.xml.crypto.XMLStructure {
                    getTransforms(): java.util.List
                    getDigestMethod(): javax.xml.crypto.dsig.DigestMethod
                    getId(): string
                    getDigestValue(): byte[]
                    getCalculatedDigestValue(): byte[]
                    validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
                    getDereferencedData(): javax.xml.crypto.Data
                    getDigestInputStream(): java.io.InputStream
                }
            }
        }
    }
}