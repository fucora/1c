declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class DateFormatSymbolsProviderImpl extends java.text.spi.DateFormatSymbolsProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                    public getAvailableLocales(): java.util.Locale[]
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public getInstance(arg0: java.util.Locale): java.text.DateFormatSymbols
                    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}