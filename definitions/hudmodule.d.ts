declare class HudModule extends Module {
    constructor(name: string, displayName: string, description: string, key: KeyCode, resizable: boolean);

    getRect(): Rect;
    setRect(newRect: Rect): void;
    getSize(): number;
    setSize(): number;
}

declare class TextModule extends HudModule {
    constructor(name: string, displayName: string, description: string, key: KeyCode);
}