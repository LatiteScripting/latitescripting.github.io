declare class HudModule extends Module {
    constructor(name: string, displayName: string, description: string, key: KeyCode);
}

declare class TextModule extends HudModule {
    constructor(name: string, displayName: string, description: string, key: KeyCode);
}