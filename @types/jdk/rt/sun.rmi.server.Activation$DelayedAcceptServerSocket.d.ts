declare namespace sun {
    namespace rmi {
        namespace server {
            class Activation$DelayedAcceptServerSocket extends java.net.ServerSocket {
                public bind(arg0: java.net.SocketAddress): void
                public bind(arg0: java.net.SocketAddress, arg1: int): void
                public getInetAddress(): java.net.InetAddress
                public getLocalPort(): int
                public getLocalSocketAddress(): java.net.SocketAddress
                public accept(): java.net.Socket
                public close(): void
                public getChannel(): java.nio.channels.ServerSocketChannel
                public isBound(): boolean
                public isClosed(): boolean
                public setSoTimeout(arg0: int): void
                public getSoTimeout(): int
                public setReuseAddress(arg0: boolean): void
                public getReuseAddress(): boolean
                public toString(): string
                public setReceiveBufferSize(arg0: int): void
                public getReceiveBufferSize(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}