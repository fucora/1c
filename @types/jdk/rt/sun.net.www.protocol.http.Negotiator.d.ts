declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    abstract class Negotiator {
                        public constructor()
                        public abstract firstToken(): byte[]
                        public abstract nextToken(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}