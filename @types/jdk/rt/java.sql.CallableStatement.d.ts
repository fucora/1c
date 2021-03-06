declare namespace java {
    namespace sql {
        interface CallableStatement extends java.sql.PreparedStatement {
            registerOutParameter(arg0: int, arg1: int): void
            registerOutParameter(arg0: int, arg1: int, arg2: int): void
            wasNull(): boolean
            getString(arg0: int): string
            getBoolean(arg0: int): boolean
            getByte(arg0: int): byte
            getShort(arg0: int): short
            getInt(arg0: int): int
            getLong(arg0: int): long
            getFloat(arg0: int): float
            getDouble(arg0: int): double
            getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
            getBytes(arg0: int): byte[]
            getDate(arg0: int): java.sql.Date
            getTime(arg0: int): java.sql.Time
            getTimestamp(arg0: int): java.sql.Timestamp
            getObject(arg0: int): java.lang.Object
            getBigDecimal(arg0: int): java.math.BigDecimal
            getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getRef(arg0: int): java.sql.Ref
            getBlob(arg0: int): java.sql.Blob
            getClob(arg0: int): java.sql.Clob
            getArray(arg0: int): java.sql.Array
            getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
            getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
            getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
            registerOutParameter(arg0: int, arg1: int, arg2: java.lang.String | string): void
            registerOutParameter(arg0: java.lang.String | string, arg1: int): void
            registerOutParameter(arg0: java.lang.String | string, arg1: int, arg2: int): void
            registerOutParameter(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
            getURL(arg0: int): java.net.URL
            setURL(arg0: java.lang.String | string, arg1: java.net.URL): void
            setNull(arg0: java.lang.String | string, arg1: int): void
            setBoolean(arg0: java.lang.String | string, arg1: boolean): void
            setByte(arg0: java.lang.String | string, arg1: byte): void
            setShort(arg0: java.lang.String | string, arg1: short): void
            setInt(arg0: java.lang.String | string, arg1: int): void
            setLong(arg0: java.lang.String | string, arg1: long): void
            setFloat(arg0: java.lang.String | string, arg1: float): void
            setDouble(arg0: java.lang.String | string, arg1: double): void
            setBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
            setString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setBytes(arg0: java.lang.String | string, arg1: byte[]): void
            setDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
            setTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
            setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: int): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
            setDate(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
            setTime(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
            setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
            setNull(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
            getString(arg0: java.lang.String | string): string
            getBoolean(arg0: java.lang.String | string): boolean
            getByte(arg0: java.lang.String | string): byte
            getShort(arg0: java.lang.String | string): short
            getInt(arg0: java.lang.String | string): int
            getLong(arg0: java.lang.String | string): long
            getFloat(arg0: java.lang.String | string): float
            getDouble(arg0: java.lang.String | string): double
            getBytes(arg0: java.lang.String | string): byte[]
            getDate(arg0: java.lang.String | string): java.sql.Date
            getTime(arg0: java.lang.String | string): java.sql.Time
            getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
            getObject(arg0: java.lang.String | string): java.lang.Object
            getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
            getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getRef(arg0: java.lang.String | string): java.sql.Ref
            getBlob(arg0: java.lang.String | string): java.sql.Blob
            getClob(arg0: java.lang.String | string): java.sql.Clob
            getArray(arg0: java.lang.String | string): java.sql.Array
            getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
            getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
            getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
            getURL(arg0: java.lang.String | string): java.net.URL
            getRowId(arg0: int): java.sql.RowId
            getRowId(arg0: java.lang.String | string): java.sql.RowId
            setRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
            setNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
            setClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: long): void
            setNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            getNClob(arg0: int): java.sql.NClob
            getNClob(arg0: java.lang.String | string): java.sql.NClob
            setSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
            getSQLXML(arg0: int): java.sql.SQLXML
            getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
            getNString(arg0: int): string
            getNString(arg0: java.lang.String | string): string
            getNCharacterStream(arg0: int): java.io.Reader
            getNCharacterStream(arg0: java.lang.String | string): java.io.Reader
            getCharacterStream(arg0: int): java.io.Reader
            getCharacterStream(arg0: java.lang.String | string): java.io.Reader
            setBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
            setClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: long): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: long): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): void
            setNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
            getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
            setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
            setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType): void
            registerOutParameter<T>(arg0: int, arg1: java.sql.SQLType): void
            registerOutParameter<T>(arg0: int, arg1: java.sql.SQLType, arg2: int): void
            registerOutParameter<T>(arg0: int, arg1: java.sql.SQLType, arg2: java.lang.String | string): void
            registerOutParameter<T>(arg0: java.lang.String | string, arg1: java.sql.SQLType): void
            registerOutParameter<T>(arg0: java.lang.String | string, arg1: java.sql.SQLType, arg2: int): void
            registerOutParameter<T>(arg0: java.lang.String | string, arg1: java.sql.SQLType, arg2: java.lang.String | string): void
        }
    }
}