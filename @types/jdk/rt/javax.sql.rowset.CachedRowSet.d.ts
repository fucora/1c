declare namespace javax {
    namespace sql {
        namespace rowset {
            interface CachedRowSet extends javax.sql.RowSet , javax.sql.rowset.Joinable {
                COMMIT_ON_ACCEPT_CHANGES: boolean
                populate(arg0: java.sql.ResultSet): void
                execute(arg0: java.sql.Connection): void
                acceptChanges(): void
                acceptChanges(arg0: java.sql.Connection): void
                restoreOriginal(): void
                release(): void
                undoDelete(): void
                undoInsert(): void
                undoUpdate(): void
                columnUpdated(arg0: int): boolean
                columnUpdated(arg0: java.lang.String | string): boolean
                toCollection(): java.util.Collection<any>
                toCollection(arg0: int): java.util.Collection<any>
                toCollection(arg0: java.lang.String | string): java.util.Collection<any>
                getSyncProvider(): javax.sql.rowset.spi.SyncProvider
                setSyncProvider(arg0: java.lang.String | string): void
                size(): int
                setMetaData(arg0: javax.sql.RowSetMetaData): void
                getOriginal(): java.sql.ResultSet
                getOriginalRow(): java.sql.ResultSet
                setOriginalRow(): void
                getTableName(): string
                setTableName(arg0: java.lang.String | string): void
                getKeyColumns(): int[]
                setKeyColumns(arg0: int[]): void
                createShared(): javax.sql.RowSet
                createCopy(): javax.sql.rowset.CachedRowSet
                createCopySchema(): javax.sql.rowset.CachedRowSet
                createCopyNoConstraints(): javax.sql.rowset.CachedRowSet
                getRowSetWarnings(): javax.sql.rowset.RowSetWarning
                getShowDeleted(): boolean
                setShowDeleted(arg0: boolean): void
                commit(): void
                rollback(): void
                rollback(arg0: java.sql.Savepoint): void
                rowSetPopulated(arg0: javax.sql.RowSetEvent, arg1: int): void
                populate(arg0: java.sql.ResultSet, arg1: int): void
                setPageSize(arg0: int): void
                getPageSize(): int
                nextPage(): boolean
                previousPage(): boolean
            }
        }
    }
}