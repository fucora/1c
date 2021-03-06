declare namespace sun {
    namespace awt {
        abstract class SunGraphicsCallback {
            public static readonly HEAVYWEIGHTS: int
            public static readonly LIGHTWEIGHTS: int
            public static readonly TWO_PASSES: int
            public constructor()
            public abstract run(arg0: java.awt.Component, arg1: java.awt.Graphics): void
            protected constrainGraphics(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void
            public runOneComponent(arg0: java.awt.Component, arg1: java.awt.Rectangle, arg2: java.awt.Graphics, arg3: java.awt.Shape, arg4: int): void
            public runComponents(arg0: java.awt.Component[], arg1: java.awt.Graphics, arg2: int): void
            public static class: java.lang.Class<any>
        }
        interface SunGraphicsCallback$$Lambda {
            (arg0: java.awt.Component, arg1: java.awt.Graphics): void
        }
    }
}