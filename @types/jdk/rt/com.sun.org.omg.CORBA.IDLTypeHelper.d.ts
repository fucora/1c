declare namespace com {
    namespace sun {
        namespace org {
            namespace omg {
                namespace CORBA {
                    class IDLTypeHelper {
                        public constructor()
                        public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CORBA.IDLType): void
                        public static extract(arg0: org.omg.CORBA.Any): org.omg.CORBA.IDLType
                        public static type(): org.omg.CORBA.TypeCode
                        public static id(): string
                        public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CORBA.IDLType
                        public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CORBA.IDLType): void
                        public static narrow(arg0: org.omg.CORBA.Object): org.omg.CORBA.IDLType
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}