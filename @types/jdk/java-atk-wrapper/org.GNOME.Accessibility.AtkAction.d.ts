declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkAction {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public static createAtkAction(arg0: javax.accessibility.AccessibleContext): org.GNOME.Accessibility.AtkAction
                public do_action(arg0: int): boolean
                public get_n_actions(): int
                public get_description(arg0: int): string
                public setDescription(arg0: int, arg1: java.lang.String | string): boolean
                public getLocalizedName(arg0: int): string
                public get_keybinding(arg0: int): string
                public static class: java.lang.Class<any>
            }
        }
    }
}