declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthSplitPaneUI extends javax.swing.plaf.basic.BasicSplitPaneUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    protected installDefaults(): void
                    protected installListeners(): void
                    protected uninstallDefaults(): void
                    protected uninstallListeners(): void
                    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public createDefaultDivider(): javax.swing.plaf.basic.BasicSplitPaneDivider
                    protected createDefaultNonContinuousLayoutDivider(): java.awt.Component
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    public finishedPaintingChildren(arg0: javax.swing.JSplitPane | javax.swing.JSplitPane$$Lambda, arg1: java.awt.Graphics): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}