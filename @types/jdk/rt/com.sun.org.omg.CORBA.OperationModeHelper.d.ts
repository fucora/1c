declare namespace com {
    namespace sun {
        namespace org {
            namespace omg {
                namespace CORBA {
                    class OperationModeHelper {
                        public constructor()
                        public static insert(arg0: org.omg.CORBA.Any, arg1: com.sun.org.omg.CORBA.OperationMode): void
                        public static extract(arg0: org.omg.CORBA.Any): com.sun.org.omg.CORBA.OperationMode
                        public static type(): org.omg.CORBA.TypeCode
                        public static id(): string
                        public static read(arg0: org.omg.CORBA.portable.InputStream): com.sun.org.omg.CORBA.OperationMode
                        public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: com.sun.org.omg.CORBA.OperationMode): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}