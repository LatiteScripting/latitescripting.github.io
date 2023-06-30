/**
 * A class representing an in-game entity.
 */
declare class Entity {
    /**
     * Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an 
     * event listener. This is to prevent the scripting engine from being used as a cheat.
     */
    isValid(): boolean;
}

declare class Player extends Entity {
    /**
     * Get the player's name (same one as the player list in the pause menu.)
     */
    getName(): string;
}