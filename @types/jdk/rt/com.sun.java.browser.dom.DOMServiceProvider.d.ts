declare namespace com {
    namespace sun {
        namespace java {
            namespace browser {
                namespace dom {
                    abstract class DOMServiceProvider {
                        public constructor()
                        public abstract canHandle(arg0: java.lang.Object): boolean
                        public abstract getDocument(arg0: java.lang.Object): org.w3c.dom.Document
                        public abstract getDOMImplementation(): org.w3c.dom.DOMImplementation
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}