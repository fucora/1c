declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orb {
                        class ORBImpl extends com.sun.corba.se.spi.orb.ORB {
                            protected transportManager: com.sun.corba.se.pept.transport.TransportManager
                            protected legacyServerSocketManager: com.sun.corba.se.spi.legacy.connection.LegacyServerSocketManager
                            public getORBData(): com.sun.corba.se.spi.orb.ORBData
                            public getPIHandler(): com.sun.corba.se.spi.protocol.PIHandler
                            public constructor()
                            public getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
                            public setORBVersion(arg0: com.sun.corba.se.spi.orb.ORBVersion): void
                            protected setDebugFlags(arg0: java.lang.String[]): void
                            public set_parameters(arg0: java.util.Properties): void
                            protected set_parameters(arg0: java.applet.Applet, arg1: java.util.Properties): void
                            protected set_parameters(arg0: java.lang.String[], arg1: java.util.Properties): void
                            public create_output_stream(): org.omg.CORBA.portable.OutputStream
                            public get_current(): org.omg.CORBA.Current
                            public create_list(arg0: int): org.omg.CORBA.NVList
                            public create_operation_list(arg0: org.omg.CORBA.Object): org.omg.CORBA.NVList
                            public create_named_value(arg0: java.lang.String | string, arg1: org.omg.CORBA.Any, arg2: int): org.omg.CORBA.NamedValue
                            public create_exception_list(): org.omg.CORBA.ExceptionList
                            public create_context_list(): org.omg.CORBA.ContextList
                            public get_default_context(): org.omg.CORBA.Context
                            public create_environment(): org.omg.CORBA.Environment
                            public send_multiple_requests_oneway(arg0: org.omg.CORBA.Request[]): void
                            public send_multiple_requests_deferred(arg0: org.omg.CORBA.Request[]): void
                            public poll_next_response(): boolean
                            public get_next_response(): org.omg.CORBA.Request
                            public notifyORB(): void
                            public object_to_string(arg0: org.omg.CORBA.Object): string
                            public string_to_object(arg0: java.lang.String | string): org.omg.CORBA.Object
                            public getFVDCodeBaseIOR(): com.sun.corba.se.spi.ior.IOR
                            public get_primitive_tc(arg0: org.omg.CORBA.TCKind): org.omg.CORBA.TypeCode
                            public create_struct_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.StructMember[]): org.omg.CORBA.TypeCode
                            public create_union_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.TypeCode, arg3: org.omg.CORBA.UnionMember[]): org.omg.CORBA.TypeCode
                            public create_enum_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[]): org.omg.CORBA.TypeCode
                            public create_alias_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                            public create_exception_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.StructMember[]): org.omg.CORBA.TypeCode
                            public create_interface_tc(arg0: java.lang.String | string, arg1: java.lang.String | string): org.omg.CORBA.TypeCode
                            public create_string_tc(arg0: int): org.omg.CORBA.TypeCode
                            public create_wstring_tc(arg0: int): org.omg.CORBA.TypeCode
                            public create_sequence_tc(arg0: int, arg1: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                            public create_recursive_sequence_tc(arg0: int, arg1: int): org.omg.CORBA.TypeCode
                            public create_array_tc(arg0: int, arg1: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                            public create_native_tc(arg0: java.lang.String | string, arg1: java.lang.String | string): org.omg.CORBA.TypeCode
                            public create_abstract_interface_tc(arg0: java.lang.String | string, arg1: java.lang.String | string): org.omg.CORBA.TypeCode
                            public create_fixed_tc(arg0: short, arg1: short): org.omg.CORBA.TypeCode
                            public create_value_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: org.omg.CORBA.TypeCode, arg4: org.omg.CORBA.ValueMember[]): org.omg.CORBA.TypeCode
                            public create_recursive_tc(arg0: java.lang.String | string): org.omg.CORBA.TypeCode
                            public create_value_box_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                            public create_any(): org.omg.CORBA.Any
                            public setTypeCodeForClass(arg0: java.lang.Class, arg1: com.sun.corba.se.impl.corba.TypeCodeImpl): void
                            public getTypeCodeForClass(arg0: java.lang.Class): com.sun.corba.se.impl.corba.TypeCodeImpl
                            public list_initial_services(): java.lang.String[]
                            public resolve_initial_references(arg0: java.lang.String | string): org.omg.CORBA.Object
                            public register_initial_reference(arg0: java.lang.String | string, arg1: org.omg.CORBA.Object): void
                            public run(): void
                            public shutdown(arg0: boolean): void
                            protected shutdownServants(arg0: boolean): void
                            public checkShutdownState(): void
                            public isDuringDispatch(): boolean
                            public startingDispatch(): void
                            public finishedDispatch(): void
                            public destroy(): void
                            public register_value_factory(arg0: java.lang.String | string, arg1: org.omg.CORBA.portable.ValueFactory | org.omg.CORBA.portable.ValueFactory$$Lambda): org.omg.CORBA.portable.ValueFactory
                            public unregister_value_factory(arg0: java.lang.String | string): void
                            public lookup_value_factory(arg0: java.lang.String | string): org.omg.CORBA.portable.ValueFactory
                            public peekInvocationInfo(): com.sun.corba.se.spi.oa.OAInvocationInfo
                            public pushInvocationInfo(arg0: com.sun.corba.se.spi.oa.OAInvocationInfo): void
                            public popInvocationInfo(): com.sun.corba.se.spi.oa.OAInvocationInfo
                            public initBadServerIdHandler(): void
                            public setBadServerIdHandler(arg0: com.sun.corba.se.impl.oa.poa.BadServerIdHandler | com.sun.corba.se.impl.oa.poa.BadServerIdHandler$$Lambda): void
                            public handleBadServerId(arg0: com.sun.corba.se.spi.ior.ObjectKey): void
                            public create_policy(arg0: int, arg1: org.omg.CORBA.Any): org.omg.CORBA.Policy
                            public connect(arg0: org.omg.CORBA.Object): void
                            public disconnect(arg0: org.omg.CORBA.Object): void
                            public getTransientServerId(): int
                            public getRequestDispatcherRegistry(): com.sun.corba.se.spi.protocol.RequestDispatcherRegistry
                            public getServiceContextRegistry(): com.sun.corba.se.spi.servicecontext.ServiceContextRegistry
                            public isLocalHost(arg0: java.lang.String | string): boolean
                            public isLocalServerId(arg0: int, arg1: int): boolean
                            public work_pending(): boolean
                            public perform_work(): void
                            public set_delegate(arg0: java.lang.Object): void
                            public createOrIncrementInvocationInfo(): com.sun.corba.se.pept.protocol.ClientInvocationInfo
                            public releaseOrDecrementInvocationInfo(): void
                            public getInvocationInfo(): com.sun.corba.se.pept.protocol.ClientInvocationInfo
                            public setClientDelegateFactory(arg0: com.sun.corba.se.spi.protocol.ClientDelegateFactory | com.sun.corba.se.spi.protocol.ClientDelegateFactory$$Lambda): void
                            public getClientDelegateFactory(): com.sun.corba.se.spi.protocol.ClientDelegateFactory
                            public setCorbaContactInfoListFactory(arg0: com.sun.corba.se.spi.transport.CorbaContactInfoListFactory): void
                            public getCorbaContactInfoListFactory(): com.sun.corba.se.spi.transport.CorbaContactInfoListFactory
                            public setResolver(arg0: com.sun.corba.se.spi.resolver.Resolver): void
                            public getResolver(): com.sun.corba.se.spi.resolver.Resolver
                            public setLocalResolver(arg0: com.sun.corba.se.spi.resolver.LocalResolver): void
                            public getLocalResolver(): com.sun.corba.se.spi.resolver.LocalResolver
                            public setURLOperation(arg0: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda): void
                            public getURLOperation(): com.sun.corba.se.spi.orb.Operation
                            public setINSDelegate(arg0: com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher): void
                            public getTaggedComponentFactoryFinder(): com.sun.corba.se.spi.ior.TaggedComponentFactoryFinder
                            public getTaggedProfileFactoryFinder(): com.sun.corba.se.spi.ior.IdentifiableFactoryFinder
                            public getTaggedProfileTemplateFactoryFinder(): com.sun.corba.se.spi.ior.IdentifiableFactoryFinder
                            public getObjectKeyFactory(): com.sun.corba.se.spi.ior.ObjectKeyFactory
                            public setObjectKeyFactory(arg0: com.sun.corba.se.spi.ior.ObjectKeyFactory): void
                            public getTransportManager(): com.sun.corba.se.pept.transport.TransportManager
                            public getCorbaTransportManager(): com.sun.corba.se.spi.transport.CorbaTransportManager
                            public getLegacyServerSocketManager(): com.sun.corba.se.spi.legacy.connection.LegacyServerSocketManager
                            public setThreadPoolManager(arg0: com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolManager): void
                            public getThreadPoolManager(): com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolManager
                            public getCopierManager(): com.sun.corba.se.spi.copyobject.CopierManager
                            public validateIORClass(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}