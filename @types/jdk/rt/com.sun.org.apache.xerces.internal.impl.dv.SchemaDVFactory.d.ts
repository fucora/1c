declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                abstract class SchemaDVFactory {
                                    public static getInstance(): com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory
                                    public static getInstance(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory
                                    protected constructor()
                                    public abstract getBuiltInType(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
                                    public abstract getBuiltInTypes(): com.sun.org.apache.xerces.internal.util.SymbolHash
                                    public abstract createTypeRestriction(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
                                    public abstract createTypeList(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
                                    public abstract createTypeUnion(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType[], arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}