declare namespace org {
    namespace omg {
        namespace CORBA {
            interface DataOutputStream extends org.omg.CORBA.portable.ValueBase {
                write_any(arg0: org.omg.CORBA.Any): void
                write_boolean(arg0: boolean): void
                write_char(arg0: char): void
                write_wchar(arg0: char): void
                write_octet(arg0: byte): void
                write_short(arg0: short): void
                write_ushort(arg0: short): void
                write_long(arg0: int): void
                write_ulong(arg0: int): void
                write_longlong(arg0: long): void
                write_ulonglong(arg0: long): void
                write_float(arg0: float): void
                write_double(arg0: double): void
                write_string(arg0: java.lang.String | string): void
                write_wstring(arg0: java.lang.String | string): void
                write_Object(arg0: org.omg.CORBA.Object): void
                write_Abstract(arg0: java.lang.Object): void
                write_Value(arg0: java.io.Serializable): void
                write_TypeCode(arg0: org.omg.CORBA.TypeCode): void
                write_any_array(arg0: org.omg.CORBA.Any[], arg1: int, arg2: int): void
                write_boolean_array(arg0: boolean[], arg1: int, arg2: int): void
                write_char_array(arg0: char[], arg1: int, arg2: int): void
                write_wchar_array(arg0: char[], arg1: int, arg2: int): void
                write_octet_array(arg0: byte[], arg1: int, arg2: int): void
                write_short_array(arg0: short[], arg1: int, arg2: int): void
                write_ushort_array(arg0: short[], arg1: int, arg2: int): void
                write_long_array(arg0: int[], arg1: int, arg2: int): void
                write_ulong_array(arg0: int[], arg1: int, arg2: int): void
                write_ulonglong_array(arg0: long[], arg1: int, arg2: int): void
                write_longlong_array(arg0: long[], arg1: int, arg2: int): void
                write_float_array(arg0: float[], arg1: int, arg2: int): void
                write_double_array(arg0: double[], arg1: int, arg2: int): void
            }
        }
    }
}