declare namespace com {
    namespace sun {
        namespace security {
            namespace auth {
                namespace module {
                    class JndiLoginModule implements javax.security.auth.spi.LoginModule {
                        public readonly USER_PROVIDER: string
                        public readonly GROUP_PROVIDER: string
                        public constructor()
                        public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                        public login(): boolean
                        public commit(): boolean
                        public abort(): boolean
                        public logout(): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}