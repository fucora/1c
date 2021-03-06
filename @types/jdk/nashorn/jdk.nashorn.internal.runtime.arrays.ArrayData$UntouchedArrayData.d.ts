declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class ArrayData$UntouchedArrayData extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public asObjectArray(): java.lang.Object[]
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getDouble(arg0: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public pop(): java.lang.Object
                        public push(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public toString(): string
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public getElementType(): java.lang.Class<any>
                        public getBoxedElementType(): java.lang.Class<any>
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}