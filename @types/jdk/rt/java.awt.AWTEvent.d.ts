declare namespace java {
    namespace awt {
        abstract class AWTEvent extends java.util.EventObject {
            protected id: int
            protected consumed: boolean
            public static readonly COMPONENT_EVENT_MASK: long
            public static readonly CONTAINER_EVENT_MASK: long
            public static readonly FOCUS_EVENT_MASK: long
            public static readonly KEY_EVENT_MASK: long
            public static readonly MOUSE_EVENT_MASK: long
            public static readonly MOUSE_MOTION_EVENT_MASK: long
            public static readonly WINDOW_EVENT_MASK: long
            public static readonly ACTION_EVENT_MASK: long
            public static readonly ADJUSTMENT_EVENT_MASK: long
            public static readonly ITEM_EVENT_MASK: long
            public static readonly TEXT_EVENT_MASK: long
            public static readonly INPUT_METHOD_EVENT_MASK: long
            public static readonly PAINT_EVENT_MASK: long
            public static readonly INVOCATION_EVENT_MASK: long
            public static readonly HIERARCHY_EVENT_MASK: long
            public static readonly HIERARCHY_BOUNDS_EVENT_MASK: long
            public static readonly MOUSE_WHEEL_EVENT_MASK: long
            public static readonly WINDOW_STATE_EVENT_MASK: long
            public static readonly WINDOW_FOCUS_EVENT_MASK: long
            public static readonly RESERVED_ID_MAX: int
            public constructor(arg0: java.awt.Event)
            public constructor(arg0: java.lang.Object, arg1: int)
            public setSource(arg0: java.lang.Object): void
            public getID(): int
            public toString(): string
            public paramString(): string
            protected consume(): void
            protected isConsumed(): boolean
            public static class: java.lang.Class<any>
        }
    }
}