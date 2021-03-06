declare namespace java {
    namespace text {
        class ChoiceFormat extends java.text.NumberFormat {
            public applyPattern(arg0: java.lang.String | string): void
            public toPattern(): string
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: double[], arg1: java.lang.String[])
            public setChoices(arg0: double[], arg1: java.lang.String[]): void
            public getLimits(): double[]
            public getFormats(): java.lang.Object[]
            public format(arg0: long, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public format(arg0: double, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Number
            public static nextDouble(arg0: double): double
            public static previousDouble(arg0: double): double
            public clone(): java.lang.Object
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public static nextDouble(arg0: double, arg1: boolean): double
            public static class: java.lang.Class<any>
        }
    }
}