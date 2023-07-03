interface Game {
    /**
     * Sends a chat message.
     * @param msg The message to send.
     */
    sendChatMessage(msg: string): void;

    /**
     * Execute an in-game command.
     * @param cmd The command to send. Be sure to add '/' before your command.
     */
    executeCommand(cmd: string): void;

    /**
     * Plays a sound. Refer to https://www.digminecraft.com/lists/sound_list_pe.php for sounds
     * @param soundName The sound name, for example: mob.enderdragon.growl
     * @param volume The volume of the sound. Default is 1
     * @param pitch Pitch of the sound. Default is 1
     */
    playSoundUI(soundName: string, volume: number, pitch: number): void;

    /**
     * Get your player. This will return null if you are not in a game.
     */
    getLocalPlayer(): Player | null;

    /**
     * Gets the server you are connected to. This will return null if you are not in a server.
     */
    getConnectedServer(): string | null;

    /**
     * Gets the featured server name you are connected to. This will return null if you are not in a featured server.
     * 
     * Featured server examples: "The Hive" "CubeCraft" "InPvP" "Mineplex"
     */
    getConnectedFeaturedServer(): string | null;

    /**
     * Get the current world that you're in.
     */
    getWorld() : World | null;
}

declare const game: Game;
