declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
                class MultiComboBoxUI extends javax.swing.plaf.ComboBoxUI {
                    protected uis: java.util.Vector
                    public constructor()
                    public getUIs(): javax.swing.plaf.ComponentUI[]
                    public isFocusTraversable(arg0: javax.swing.JComboBox): boolean
                    public setPopupVisible(arg0: javax.swing.JComboBox, arg1: boolean): void
                    public isPopupVisible(arg0: javax.swing.JComboBox): boolean
                    public contains(arg0: javax.swing.JComponent, arg1: int, arg2: int): boolean
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getAccessibleChildrenCount(arg0: javax.swing.JComponent): int
                    public getAccessibleChild(arg0: javax.swing.JComponent, arg1: int): javax.accessibility.Accessible
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}