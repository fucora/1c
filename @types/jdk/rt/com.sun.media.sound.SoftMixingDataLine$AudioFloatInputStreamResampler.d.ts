declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftMixingDataLine$AudioFloatInputStreamResampler extends com.sun.media.sound.AudioFloatInputStream {
                    public constructor(arg0: com.sun.media.sound.AudioFloatInputStream, arg1: javax.sound.sampled.AudioFormat)
                    public available(): int
                    public close(): void
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getFrameLength(): long
                    public mark(arg0: int): void
                    public markSupported(): boolean
                    public read(arg0: float[], arg1: int, arg2: int): int
                    public reset(): void
                    public skip(arg0: long): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}