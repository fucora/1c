declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace motif {
                        class MotifFileChooserUI extends javax.swing.plaf.basic.BasicFileChooserUI {
                            protected directoryList: javax.swing.JList<java.io.File>
                            protected fileList: javax.swing.JList<java.io.File>
                            protected pathField: javax.swing.JTextField
                            protected filterComboBox: javax.swing.JComboBox<javax.swing.filechooser.FileFilter>
                            protected filenameTextField: javax.swing.JTextField
                            protected approveButton: javax.swing.JButton
                            public constructor(arg0: javax.swing.JFileChooser)
                            public getFileName(): string
                            public setFileName(arg0: java.lang.String | string): void
                            public getDirectoryName(): string
                            public setDirectoryName(arg0: java.lang.String | string): void
                            public ensureFileIsVisible(arg0: javax.swing.JFileChooser, arg1: java.io.File): void
                            public rescanCurrentDirectory(arg0: javax.swing.JFileChooser): void
                            public createPropertyChangeListener(arg0: javax.swing.JFileChooser): java.beans.PropertyChangeListener
                            public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                            public installUI(arg0: javax.swing.JComponent): void
                            public uninstallUI(arg0: javax.swing.JComponent): void
                            public installComponents(arg0: javax.swing.JFileChooser): void
                            protected getBottomPanel(): javax.swing.JPanel
                            public uninstallComponents(arg0: javax.swing.JFileChooser): void
                            protected installStrings(arg0: javax.swing.JFileChooser): void
                            protected installIcons(arg0: javax.swing.JFileChooser): void
                            protected uninstallIcons(arg0: javax.swing.JFileChooser): void
                            protected createFilesList(): javax.swing.JScrollPane
                            protected createDirectoryList(): javax.swing.JScrollPane
                            public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                            public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                            public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                            protected align(arg0: javax.swing.JComponent): void
                            protected createFilterComboBoxModel(): com.sun.java.swing.plaf.motif.MotifFileChooserUI$FilterComboBoxModel
                            protected createFilterComboBoxRenderer(): com.sun.java.swing.plaf.motif.MotifFileChooserUI$FilterComboBoxRenderer
                            protected getApproveButton(arg0: javax.swing.JFileChooser): javax.swing.JButton
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}