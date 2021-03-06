declare namespace javax {
    namespace sound {
        namespace sampled {
            interface TargetDataLine extends javax.sound.sampled.DataLine {
                open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                open(arg0: javax.sound.sampled.AudioFormat): void
                read(arg0: byte[], arg1: int, arg2: int): int
            }
        }
    }
}