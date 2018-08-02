declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                abstract class SctpServerChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                    public static open(): com.sun.nio.sctp.SctpServerChannel
                    public accept(): com.sun.nio.sctp.SctpChannel
                    public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpServerChannel
                    public bind(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.SctpServerChannel
                    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
                    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
                    public getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
                    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
                    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpServerChannel
                    public supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
                    public validOps(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}