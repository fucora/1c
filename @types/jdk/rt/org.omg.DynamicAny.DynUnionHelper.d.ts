declare namespace org {
    namespace omg {
        namespace DynamicAny {
            abstract class DynUnionHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.DynamicAny.DynUnion): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.DynamicAny.DynUnion
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.DynamicAny.DynUnion
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.DynamicAny.DynUnion): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.DynamicAny.DynUnion
                public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.DynamicAny.DynUnion
                public static class: java.lang.Class<any>
            }
        }
    }
}