declare class Rect {
    /**
     * A class representing a rectangle on the screen.
     * @param left The x coordinate of the top-left point.
     * @param top The y coordinate of the top-left point.
     * @param right The x coordinate of the bottom-right point.
     * @param bottom The y coordinate of the bottom-right point.
     */
    constructor(left: number, top: number, right: number, bottom: number);

    left: number;
    top: number;
    right: number;
    bottom: number;
}

declare class Vector2 {
    /**
     * A point on the screen.
     * @param x The x coordinate.
     * @param y The y coordinate.
     */
    constructor(x: number, y: number);

    x: number;
    y: number;
}

type Color = [number, number, number, number];

declare const enum TextAlignment {
    Left,
    Right,
    Center
}

declare const enum Font {
    /**
     * By default, this is Noto Sans
     */
    Smooth,
    /**
     * By default, this is Mojangles
     */
    Minecraft,
    MinecraftTen
}

declare interface Graphics2D {
    drawRect(rect: Rect, color: Color, thickness: number): void;
    fillRect(rect: Rect, color: Color): void;
    drawText(rect: Rect, color: Color, text: string, size: number, font: Font, alignment: TextAlignment): void;
    getTextSize(text: string, size: number, font: Font): Vector2;
    setClippingRect(rect: Rect): void;
    restoreClippingRect(): void;
}

declare const graphics: Graphics2D;
