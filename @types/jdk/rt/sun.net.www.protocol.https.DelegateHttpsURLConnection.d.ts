declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace https {
                    class DelegateHttpsURLConnection extends sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection {
                        public httpsURLConnection: javax.net.ssl.HttpsURLConnection
                        protected getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
                        protected getHostnameVerifier(): javax.net.ssl.HostnameVerifier
                        protected dispose(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}