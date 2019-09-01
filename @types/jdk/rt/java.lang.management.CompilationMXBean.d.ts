declare namespace java {
    namespace lang {
        namespace management {
            interface CompilationMXBean extends java.lang.management.PlatformManagedObject {
                getName(): string
                isCompilationTimeMonitoringSupported(): boolean
                getTotalCompilationTime(): long
            }
        }
    }
}