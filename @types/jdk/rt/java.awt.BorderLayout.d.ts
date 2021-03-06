declare namespace java {
    namespace awt {
        class BorderLayout implements java.awt.LayoutManager2 , java.io.Serializable {
            public static readonly NORTH: string
            public static readonly SOUTH: string
            public static readonly EAST: string
            public static readonly WEST: string
            public static readonly CENTER: string
            public static readonly BEFORE_FIRST_LINE: string
            public static readonly AFTER_LAST_LINE: string
            public static readonly BEFORE_LINE_BEGINS: string
            public static readonly AFTER_LINE_ENDS: string
            public static readonly PAGE_START: string
            public static readonly PAGE_END: string
            public static readonly LINE_START: string
            public static readonly LINE_END: string
            public constructor()
            public constructor(arg0: int, arg1: int)
            public getHgap(): int
            public setHgap(arg0: int): void
            public getVgap(): int
            public setVgap(arg0: int): void
            public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
            public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
            public removeLayoutComponent(arg0: java.awt.Component): void
            public getLayoutComponent(arg0: java.lang.Object): java.awt.Component
            public getLayoutComponent(arg0: java.awt.Container, arg1: java.lang.Object): java.awt.Component
            public getConstraints(arg0: java.awt.Component): java.lang.Object
            public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public getLayoutAlignmentX(arg0: java.awt.Container): float
            public getLayoutAlignmentY(arg0: java.awt.Container): float
            public invalidateLayout(arg0: java.awt.Container): void
            public layoutContainer(arg0: java.awt.Container): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}