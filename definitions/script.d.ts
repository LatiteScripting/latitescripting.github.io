export interface Script {
  /**
   * Prints to chat, and logs the contents to file. They are seperated by new lines.
   * @param contents The contents to log.
   */
  log(...contents: any[]): void;

  name: string;
  author: string;
  version: string;
  description: string;
}
declare var script: Script;
