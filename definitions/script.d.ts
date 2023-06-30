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
/**
 * Load a specified script from filesystem or web.
 * @param path The filepath, HTTP or HTTPS link to the JS file.
 * @throws Invalid filepath or Non-OK HTTP/HTTPS error code
 * @returns Whatever the loaded script exports (through script_exports)
 */
declare function require(path: string): object;
