declare namespace javax {
    namespace sql {
        namespace rowset {
            interface WebRowSet extends javax.sql.rowset.CachedRowSet {
                PUBLIC_XML_SCHEMA: string
                SCHEMA_SYSTEM_ID: string
                readXml(arg0: java.io.Reader): void
                readXml(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                writeXml(arg0: java.sql.ResultSet, arg1: java.io.Writer): void
                writeXml(arg0: java.sql.ResultSet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                writeXml(arg0: java.io.Writer): void
                writeXml(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            }
        }
    }
}