declare namespace org {
    namespace omg {
        namespace DynamicAny {
            abstract class DynAnyHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.DynamicAny.DynAny): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.DynamicAny.DynAny
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.DynamicAny.DynAny
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.DynamicAny.DynAny): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.DynamicAny.DynAny
                public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.DynamicAny.DynAny
                public static class: java.lang.Class<any>
            }
        }
    }
}