declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                abstract class Configuration {
                    protected constructor()
                    public static getConfiguration(): javax.security.auth.login.Configuration
                    public static setConfiguration(arg0: javax.security.auth.login.Configuration | javax.security.auth.login.Configuration$$Lambda): void
                    public static getInstance(arg0: java.lang.String | string, arg1: javax.security.auth.login.Configuration$Parameters): javax.security.auth.login.Configuration
                    public static getInstance(arg0: java.lang.String | string, arg1: javax.security.auth.login.Configuration$Parameters, arg2: java.lang.String | string): javax.security.auth.login.Configuration
                    public static getInstance(arg0: java.lang.String | string, arg1: javax.security.auth.login.Configuration$Parameters, arg2: java.security.Provider): javax.security.auth.login.Configuration
                    public getProvider(): java.security.Provider
                    public getType(): string
                    public getParameters(): javax.security.auth.login.Configuration$Parameters
                    public abstract getAppConfigurationEntry(arg0: java.lang.String | string): javax.security.auth.login.AppConfigurationEntry[]
                    public refresh(): void
                    public static class: java.lang.Class<any>
                }
                interface Configuration$$Lambda {
                    (arg0: java.lang.String | string): javax.security.auth.login.AppConfigurationEntry[]
                }
            }
        }
    }
}