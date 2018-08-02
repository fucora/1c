declare namespace javax {
    namespace swing {
        namespace event {
            interface DocumentEvent {
                getOffset(): int
                getLength(): int
                getDocument(): javax.swing.text.Document
                getType(): javax.swing.event.DocumentEvent$EventType
                getChange(arg0: javax.swing.text.Element): javax.swing.event.DocumentEvent$ElementChange
            }
        }
    }
}