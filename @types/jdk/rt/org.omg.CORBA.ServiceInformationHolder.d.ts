declare namespace org {
    namespace omg {
        namespace CORBA {
            class ServiceInformationHolder implements org.omg.CORBA.portable.Streamable {
                public value: org.omg.CORBA.ServiceInformation
                public constructor()
                public constructor(arg0: org.omg.CORBA.ServiceInformation)
                public _write(arg0: org.omg.CORBA.portable.OutputStream): void
                public _read(arg0: org.omg.CORBA.portable.InputStream): void
                public _type(): org.omg.CORBA.TypeCode
                public static class: java.lang.Class<any>
            }
        }
    }
}