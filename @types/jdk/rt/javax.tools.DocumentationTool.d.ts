declare namespace javax {
    namespace tools {
interface DocumentationTool extends javax.tools.Tool , javax.tools.OptionChecker {
    getTask(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.tools.JavaFileManager, arg2: javax.tools.DiagnosticListener<javax.tools.JavaFileObject> | javax.tools.DiagnosticListener$$Lambda<javax.tools.JavaFileObject>, arg3: java.lang.Class<any>, arg4: java.lang.Iterable<java.lang.String>, arg5: java.lang.Iterable<javax.tools.JavaFileObject>): javax.tools.DocumentationTool$DocumentationTask
    getStandardFileManager(arg0: javax.tools.DiagnosticListener<javax.tools.JavaFileObject> | javax.tools.DiagnosticListener$$Lambda<javax.tools.JavaFileObject>, arg1: java.util.Locale, arg2: java.nio.charset.Charset): javax.tools.StandardJavaFileManager
}

    }
}