declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        namespace InitialNameServicePackage {
                            abstract class NameAlreadyBoundHelper {
                                public constructor()
                                public static insert(arg0: org.omg.CORBA.Any, arg1: com.sun.corba.se.spi.activation.InitialNameServicePackage.NameAlreadyBound): void
                                public static extract(arg0: org.omg.CORBA.Any): com.sun.corba.se.spi.activation.InitialNameServicePackage.NameAlreadyBound
                                public static type(): org.omg.CORBA.TypeCode
                                public static id(): string
                                public static read(arg0: org.omg.CORBA.portable.InputStream): com.sun.corba.se.spi.activation.InitialNameServicePackage.NameAlreadyBound
                                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: com.sun.corba.se.spi.activation.InitialNameServicePackage.NameAlreadyBound): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}