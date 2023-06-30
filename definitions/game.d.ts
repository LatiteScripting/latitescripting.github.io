interface Game {
    /**
     * Sends a chat message.
     * @param msg The message to send.
     */
    sendChatMessage(msg: string): void;

    /**
     * Get your player. This will return null if you are not in a game.
     */
    getLocalPlayer(): Player | null;
}

declare const game: Game;
