declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthButtonUI extends javax.swing.plaf.basic.BasicButtonUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    protected installDefaults(arg0: javax.swing.AbstractButton): void
                    protected installListeners(arg0: javax.swing.AbstractButton): void
                    protected uninstallListeners(arg0: javax.swing.AbstractButton): void
                    protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
                    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
                    public getBaseline(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): int
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    protected getDefaultIcon(arg0: javax.swing.AbstractButton): javax.swing.Icon
                    protected getIcon(arg0: javax.swing.AbstractButton): javax.swing.Icon
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    protected getSizingIcon(arg0: javax.swing.AbstractButton): javax.swing.Icon
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}