declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class HRuleView extends javax.swing.text.View {
                    public constructor(arg0: javax.swing.text.Element)
                    protected setPropertiesFromAttributes(): void
                    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
                    public getPreferredSpan(arg0: int): float
                    public getResizeWeight(arg0: int): int
                    public getBreakWeight(arg0: int, arg1: float, arg2: float): int
                    public breakView(arg0: int, arg1: int, arg2: float, arg3: float): javax.swing.text.View
                    public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
                    public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
                    public getAttributes(): javax.swing.text.AttributeSet
                    public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}