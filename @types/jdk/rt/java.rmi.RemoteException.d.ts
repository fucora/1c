declare namespace java {
    namespace rmi {
        class RemoteException extends java.io.IOException {
            public detail: java.lang.Throwable
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public getMessage(): string
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
    }
}