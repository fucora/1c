declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                abstract class ClassMap<T> {
                    protected constructor(arg0: java.lang.ClassLoader)
                    protected abstract computeValue(arg0: java.lang.Class<any>): T
                    public get(arg0: java.lang.Class<any>): T
                    public static class: java.lang.Class<any>
                }
                interface ClassMap$$Lambda<T> {
                    (arg0: java.lang.Class<any>): T
                }
            }
        }
    }
}