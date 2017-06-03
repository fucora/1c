import { Client } from "./client";
export declare abstract class JDBCClient implements Client {
    protected connection: java.sql.Connection;
    protected url: string;
    protected SQL_UNIX_TIMESTAMP: string;
    protected abstract connect(): void;
    getInt(bucket: string, key: string): number | null;
    getFloat(bucket: string, key: string): number | null;
    getString(bucket: string, key: string): string | null;
    getJSON(bucket: string, key: string): any | null;
    setInt(bucket: string, key: string, value: number, ttl?: number): void;
    setFloat(bucket: string, key: string, value: number, ttl?: number): void;
    setString(bucket: string, key: string, value: string, ttl?: number): void;
    setJSON(bucket: string, key: string, json: any, ttl?: number): void;
    fetch(bucket: string, key: string): byte[] | null;
    put(bucket: string, key: string, data: byte[], ttl?: number): void;
    ensureTable(table: string, pkey: string, type: string): void;
    ensureColumn(table: string, column: string, type: string): void;
    ensureIndex(table: string, columns: string[]): void;
    ensureUniqueIndex(table: string, columns: string[]): void;
    one<T>(sql: string, parameters?: any[]): T | null;
    list<T>(sql: string, parameters?: any[]): T[];
    insert(table: string, object: any): void;
    upsert(table: string, object: any): void;
    execute(sql: string, parameters?: any[]): void;
    delete(bucket_or_table: string, key: any): void;
    close(): void;
    private prepareStatement(sql, parameters?);
    private getByType(bucket, key, type);
    private setByType(bucket, key, type, value, ttl?);
}
