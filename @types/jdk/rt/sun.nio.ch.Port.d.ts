declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class Port extends sun.nio.ch.AsynchronousChannelGroupImpl {
                protected fdToChannelLock: java.util.concurrent.locks.ReadWriteLock
                protected fdToChannel: java.util.Map<java.lang.Integer, sun.nio.ch.Port$PollableChannel>
                protected preUnregister(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}