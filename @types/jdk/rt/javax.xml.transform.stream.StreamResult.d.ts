declare namespace javax {
    namespace xml {
        namespace transform {
            namespace stream {
                class StreamResult implements javax.xml.transform.Result {
                    public static FEATURE: string
                    public constructor()
                    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                    public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda)
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.io.File)
                    public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public getOutputStream(): java.io.OutputStream
                    public setWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                    public getWriter(): java.io.Writer
                    public setSystemId(arg0: java.lang.String | string): void
                    public setSystemId(arg0: java.io.File): void
                    public getSystemId(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}