declare class Rect {
    /**
     * A class representing a rectangle on the screen.
     * @param left The x coordinate of the top-left point.
     * @param top The y coordinate of the top-left point.
     * @param right The x coordinate of the bottom-right point.
     * @param bottom The y coordinate of the bottom-right point.
     */
    constructor(left: number, top: number, right: number, bottom: number);

    constructor();
} 

declare class Vector2 {
    /**
     * A point on the screen.
     * @param x The x coordinate.
     * @param y The y coordinate.
     */
    constructor(x: number, y: number);
} 

declare interface Graphics2D {
    drawRect(rect: Rect, color: [number, number, number, number], thickness: number): void;
}

declare const graphics: Graphics2D;
