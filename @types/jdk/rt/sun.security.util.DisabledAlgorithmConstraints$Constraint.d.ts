declare namespace sun {
    namespace security {
        namespace util {
            abstract class DisabledAlgorithmConstraints$Constraint {
                public permits(arg0: java.security.Key): boolean
                public permits(arg0: java.security.AlgorithmParameters): boolean
                public abstract permits(arg0: sun.security.util.ConstraintsParameters): void
                public static class: java.lang.Class<any>
            }
            interface DisabledAlgorithmConstraints$Constraint$$Lambda {
                (arg0: sun.security.util.ConstraintsParameters): void
            }
        }
    }
}