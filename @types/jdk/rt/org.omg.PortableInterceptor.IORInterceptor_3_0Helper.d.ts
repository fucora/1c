declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            abstract class IORInterceptor_3_0Helper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.PortableInterceptor.IORInterceptor_3_0): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.PortableInterceptor.IORInterceptor_3_0
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.PortableInterceptor.IORInterceptor_3_0
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.PortableInterceptor.IORInterceptor_3_0): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.PortableInterceptor.IORInterceptor_3_0
                public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.PortableInterceptor.IORInterceptor_3_0
                public static class: java.lang.Class<any>
            }
        }
    }
}