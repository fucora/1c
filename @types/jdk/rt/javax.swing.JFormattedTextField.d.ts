declare namespace javax {
    namespace swing {
        class JFormattedTextField extends javax.swing.JTextField {
            public static readonly COMMIT: int
            public static readonly COMMIT_OR_REVERT: int
            public static readonly REVERT: int
            public static readonly PERSIST: int
            public constructor()
            public constructor(arg0: java.lang.Object)
            public constructor(arg0: java.text.Format)
            public constructor(arg0: javax.swing.JFormattedTextField$AbstractFormatter)
            public constructor(arg0: javax.swing.JFormattedTextField$AbstractFormatterFactory | javax.swing.JFormattedTextField$AbstractFormatterFactory$$Lambda)
            public constructor(arg0: javax.swing.JFormattedTextField$AbstractFormatterFactory | javax.swing.JFormattedTextField$AbstractFormatterFactory$$Lambda, arg1: java.lang.Object)
            public setFocusLostBehavior(arg0: int): void
            public getFocusLostBehavior(): int
            public setFormatterFactory(arg0: javax.swing.JFormattedTextField$AbstractFormatterFactory | javax.swing.JFormattedTextField$AbstractFormatterFactory$$Lambda): void
            public getFormatterFactory(): javax.swing.JFormattedTextField$AbstractFormatterFactory
            protected setFormatter(arg0: javax.swing.JFormattedTextField$AbstractFormatter): void
            public getFormatter(): javax.swing.JFormattedTextField$AbstractFormatter
            public setValue(arg0: java.lang.Object): void
            public getValue(): java.lang.Object
            public commitEdit(): void
            public isEditValid(): boolean
            protected invalidEdit(): void
            protected processInputMethodEvent(arg0: java.awt.event.InputMethodEvent): void
            protected processFocusEvent(arg0: java.awt.event.FocusEvent): void
            public getActions(): javax.swing.Action[]
            public getUIClassID(): string
            public setDocument(arg0: javax.swing.text.Document): void
            public static class: java.lang.Class<any>
        }
    }
}