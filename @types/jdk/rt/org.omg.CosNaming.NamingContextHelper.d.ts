declare namespace org {
    namespace omg {
        namespace CosNaming {
            abstract class NamingContextHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CosNaming.NamingContext): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.CosNaming.NamingContext
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CosNaming.NamingContext
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CosNaming.NamingContext): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.CosNaming.NamingContext
                public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.CosNaming.NamingContext
                public static class: java.lang.Class<any>
            }
        }
    }
}