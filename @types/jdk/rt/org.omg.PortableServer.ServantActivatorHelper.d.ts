declare namespace org {
    namespace omg {
        namespace PortableServer {
            abstract class ServantActivatorHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.PortableServer.ServantActivator): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.PortableServer.ServantActivator
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.PortableServer.ServantActivator
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.PortableServer.ServantActivator): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.PortableServer.ServantActivator
                public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.PortableServer.ServantActivator
                public static class: java.lang.Class<any>
            }
        }
    }
}