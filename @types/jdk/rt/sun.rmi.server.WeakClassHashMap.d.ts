declare namespace sun {
    namespace rmi {
        namespace server {
            abstract class WeakClassHashMap<V> {
                protected constructor()
                public get(arg0: java.lang.Class<any>): V
                protected abstract computeValue(arg0: java.lang.Class<any>): V
                public static class: java.lang.Class<any>
            }
            interface WeakClassHashMap$$Lambda<V> {
                (arg0: java.lang.Class<any>): V
            }
        }
    }
}