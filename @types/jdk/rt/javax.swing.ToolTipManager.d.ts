declare namespace javax {
    namespace swing {
        class ToolTipManager extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener {
            protected lightWeightPopupEnabled: boolean
            protected heavyWeightPopupEnabled: boolean
            public setEnabled(arg0: boolean): void
            public isEnabled(): boolean
            public setLightWeightPopupEnabled(arg0: boolean): void
            public isLightWeightPopupEnabled(): boolean
            public setInitialDelay(arg0: int): void
            public getInitialDelay(): int
            public setDismissDelay(arg0: int): void
            public getDismissDelay(): int
            public setReshowDelay(arg0: int): void
            public getReshowDelay(): int
            public static sharedInstance(): javax.swing.ToolTipManager
            public registerComponent(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
            public unregisterComponent(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
            public mouseEntered(arg0: java.awt.event.MouseEvent): void
            public mouseExited(arg0: java.awt.event.MouseEvent): void
            public mousePressed(arg0: java.awt.event.MouseEvent): void
            public mouseDragged(arg0: java.awt.event.MouseEvent): void
            public mouseMoved(arg0: java.awt.event.MouseEvent): void
            public static class: java.lang.Class<any>
        }
    }
}