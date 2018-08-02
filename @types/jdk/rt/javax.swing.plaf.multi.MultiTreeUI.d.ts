declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
                class MultiTreeUI extends javax.swing.plaf.TreeUI {
                    protected uis: java.util.Vector
                    public constructor()
                    public getUIs(): javax.swing.plaf.ComponentUI[]
                    public getPathBounds(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): java.awt.Rectangle
                    public getPathForRow(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: int): javax.swing.tree.TreePath
                    public getRowForPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): int
                    public getRowCount(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): int
                    public getClosestPathForLocation(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: int, arg2: int): javax.swing.tree.TreePath
                    public isEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): boolean
                    public stopEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): boolean
                    public cancelEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): void
                    public startEditingAtPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): void
                    public getEditingPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): javax.swing.tree.TreePath
                    public contains(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): boolean
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getAccessibleChildrenCount(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): int
                    public getAccessibleChild(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int): javax.accessibility.Accessible
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}