declare namespace javax {
    namespace print {
        namespace attribute {
            class HashAttributeSet implements javax.print.attribute.AttributeSet , java.io.Serializable {
                public constructor()
                public constructor(arg0: javax.print.attribute.Attribute)
                public constructor(arg0: javax.print.attribute.Attribute[])
                public constructor(arg0: javax.print.attribute.AttributeSet)
                protected constructor(arg0: java.lang.Class<any>)
                protected constructor(arg0: javax.print.attribute.Attribute, arg1: java.lang.Class<any>)
                protected constructor(arg0: javax.print.attribute.Attribute[], arg1: java.lang.Class<any>)
                protected constructor(arg0: javax.print.attribute.AttributeSet, arg1: java.lang.Class<any>)
                public get(arg0: java.lang.Class<any>): javax.print.attribute.Attribute
                public add(arg0: javax.print.attribute.Attribute): boolean
                public remove(arg0: java.lang.Class<any>): boolean
                public remove(arg0: javax.print.attribute.Attribute): boolean
                public containsKey(arg0: java.lang.Class<any>): boolean
                public containsValue(arg0: javax.print.attribute.Attribute): boolean
                public addAll(arg0: javax.print.attribute.AttributeSet): boolean
                public size(): int
                public toArray(): javax.print.attribute.Attribute[]
                public clear(): void
                public isEmpty(): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}