declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        namespace RepositoryPackage {
                            abstract class StringSeqHelper {
                                public constructor()
                                public static insert(arg0: org.omg.CORBA.Any, arg1: java.lang.String[]): void
                                public static extract(arg0: org.omg.CORBA.Any): java.lang.String[]
                                public static type(): org.omg.CORBA.TypeCode
                                public static id(): string
                                public static read(arg0: org.omg.CORBA.portable.InputStream): java.lang.String[]
                                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.String[]): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}