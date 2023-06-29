interface Game {
  /**
   * Sends a chat message.
   * @param msg The message to send.
   */
  sendChatMessage(msg: string): void;
}

declare const game: Game;
