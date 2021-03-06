declare namespace sun {
    namespace net {
        namespace www {
            class MimeEntry implements java.lang.Cloneable {
                public static readonly UNKNOWN: int
                public static readonly LOAD_INTO_BROWSER: int
                public static readonly SAVE_TO_FILE: int
                public static readonly LAUNCH_APPLICATION: int
                public constructor(arg0: java.lang.String | string)
                public getType(): string
                public setType(arg0: java.lang.String | string): void
                public getAction(): int
                public setAction(arg0: int, arg1: java.lang.String | string): void
                public setAction(arg0: int): void
                public getLaunchString(): string
                public setCommand(arg0: java.lang.String | string): void
                public getDescription(): string
                public setDescription(arg0: java.lang.String | string): void
                public getImageFileName(): string
                public setImageFileName(arg0: java.lang.String | string): void
                public getTempFileTemplate(): string
                public getExtensions(): java.lang.String[]
                public getExtensionsAsList(): string
                public setExtensions(arg0: java.lang.String | string): void
                public launch(arg0: java.net.URLConnection | java.net.URLConnection$$Lambda, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: sun.net.www.MimeTable): java.lang.Object
                public matches(arg0: java.lang.String | string): boolean
                public clone(): java.lang.Object
                public toProperty(): string
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}