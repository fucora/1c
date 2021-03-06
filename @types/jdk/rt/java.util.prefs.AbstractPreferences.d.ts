declare namespace java {
    namespace util {
        namespace prefs {
            abstract class AbstractPreferences extends java.util.prefs.Preferences {
                protected newNode: boolean
                protected readonly lock: java.lang.Object
                protected constructor(arg0: java.util.prefs.AbstractPreferences, arg1: java.lang.String | string)
                public put(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public get(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public remove(arg0: java.lang.String | string): void
                public clear(): void
                public putInt(arg0: java.lang.String | string, arg1: int): void
                public getInt(arg0: java.lang.String | string, arg1: int): int
                public putLong(arg0: java.lang.String | string, arg1: long): void
                public getLong(arg0: java.lang.String | string, arg1: long): long
                public putBoolean(arg0: java.lang.String | string, arg1: boolean): void
                public getBoolean(arg0: java.lang.String | string, arg1: boolean): boolean
                public putFloat(arg0: java.lang.String | string, arg1: float): void
                public getFloat(arg0: java.lang.String | string, arg1: float): float
                public putDouble(arg0: java.lang.String | string, arg1: double): void
                public getDouble(arg0: java.lang.String | string, arg1: double): double
                public putByteArray(arg0: java.lang.String | string, arg1: byte[]): void
                public getByteArray(arg0: java.lang.String | string, arg1: byte[]): byte[]
                public keys(): java.lang.String[]
                public childrenNames(): java.lang.String[]
                protected cachedChildren(): java.util.prefs.AbstractPreferences[]
                public parent(): java.util.prefs.Preferences
                public node(arg0: java.lang.String | string): java.util.prefs.Preferences
                public nodeExists(arg0: java.lang.String | string): boolean
                public removeNode(): void
                public name(): string
                public absolutePath(): string
                public isUserNode(): boolean
                public addPreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
                public removePreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
                public addNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
                public removeNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
                protected abstract putSpi(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                protected abstract getSpi(arg0: java.lang.String | string): string
                protected abstract removeSpi(arg0: java.lang.String | string): void
                protected abstract removeNodeSpi(): void
                protected abstract keysSpi(): java.lang.String[]
                protected abstract childrenNamesSpi(): java.lang.String[]
                protected getChild(arg0: java.lang.String | string): java.util.prefs.AbstractPreferences
                protected abstract childSpi(arg0: java.lang.String | string): java.util.prefs.AbstractPreferences
                public toString(): string
                public sync(): void
                protected abstract syncSpi(): void
                public flush(): void
                protected abstract flushSpi(): void
                protected isRemoved(): boolean
                public exportNode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public exportSubtree(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}