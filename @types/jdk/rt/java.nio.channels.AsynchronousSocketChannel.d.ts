declare namespace java {
    namespace nio {
        namespace channels {
            abstract class AsynchronousSocketChannel implements java.nio.channels.AsynchronousByteChannel , java.nio.channels.NetworkChannel {
                protected constructor(arg0: java.nio.channels.spi.AsynchronousChannelProvider)
                public provider(): java.nio.channels.spi.AsynchronousChannelProvider
                public static open(arg0: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousSocketChannel
                public static open(): java.nio.channels.AsynchronousSocketChannel
                public abstract bind(arg0: java.net.SocketAddress): java.nio.channels.AsynchronousSocketChannel
                public abstract setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.AsynchronousSocketChannel
                public abstract shutdownInput<T>(): java.nio.channels.AsynchronousSocketChannel
                public abstract shutdownOutput<T>(): java.nio.channels.AsynchronousSocketChannel
                public abstract getRemoteAddress<T>(): java.net.SocketAddress
                public abstract connect<A>(arg0: java.net.SocketAddress, arg1: A, arg2: java.nio.channels.CompletionHandler<java.lang.Void, A>): void
                public abstract connect<A>(arg0: java.net.SocketAddress): java.util.concurrent.Future<java.lang.Void>
                public abstract read<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: java.util.concurrent.TimeUnit, arg3: A, arg4: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public read<A>(arg0: java.nio.ByteBuffer, arg1: A, arg2: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public abstract read<A>(arg0: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer>
                public abstract read<A>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: long, arg4: java.util.concurrent.TimeUnit, arg5: A, arg6: java.nio.channels.CompletionHandler<java.lang.Long, A>): void
                public abstract write<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: java.util.concurrent.TimeUnit, arg3: A, arg4: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public write<A>(arg0: java.nio.ByteBuffer, arg1: A, arg2: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public abstract write<A>(arg0: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer>
                public abstract write<A>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: long, arg4: java.util.concurrent.TimeUnit, arg5: A, arg6: java.nio.channels.CompletionHandler<java.lang.Long, A>): void
                public abstract getLocalAddress<A>(): java.net.SocketAddress
                public setOption<A>(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
                public bind<A>(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}