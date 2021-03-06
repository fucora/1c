declare namespace java {
    namespace nio {
        namespace file {
            interface Watchable {
                register(arg0: java.nio.file.WatchService, arg1: java.nio.file.WatchEvent$Kind<any>[], ...arg2: java.nio.file.WatchEvent$Modifier[]): java.nio.file.WatchKey
                register(arg0: java.nio.file.WatchService, ...arg1: java.nio.file.WatchEvent$Kind<any>[]): java.nio.file.WatchKey
            }
        }
    }
}