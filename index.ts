interface Game {
  /**
   * Sends a chat message.
   * @param msg The message to send.
   */
  sendChatMessage(msg: string): void;
}

declare const game: Game;

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
  drawRect(
    rect: Rect,
    color: [number, number, number, number],
    thickness: number
  ): void;
}

declare const graphics: Graphics2D;

declare const enum KeyCode {
  None = 0,
  Back = 8,
  Tab = 9,
  Clear = 12,
  Return = 13,
  Shift = 16,
  Ctrl = 17,
  Menu = 18,
  Pause = 19,
  Capital = 20,
  Kana = 21,
  Junja = 23,
  Final = 24,
  Kanji = 25,
  Escape = 27,
  Convert = 28,
  NonConvert = 29,
  Accept = 30,
  ModeChange = 31,
  Space = 32,
  Prior = 33,
  Next = 34,
  End = 35,
  Home = 36,
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
  Select = 41,
  Print = 42,
  Execute = 43,
  Snapshot = 44,
  Insert = 45,
  Delete = 46,
  Help = 47,
  Number0 = 48,
  Number1 = 49,
  Number2 = 50,
  Number3 = 51,
  Number4 = 52,
  Number5 = 53,
  Number6 = 54,
  Number7 = 55,
  Number8 = 56,
  Number9 = 57,
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,
  LWIN = 91,
  RWIN = 92,
  Apps = 93,
  Sleep = 95,
  Numpad0 = 96,
  Numpad1 = 97,
  Numpad2 = 98,
  Numpad3 = 99,
  Numpad4 = 100,
  Numpad5 = 101,
  Numpad6 = 102,
  Numpad7 = 103,
  Numpad8 = 104,
  Numpad9 = 105,
  Multiply = 106,
  Add = 107,
  Separator = 108,
  Subtract = 109,
  Decimal = 110,
  Divide = 111,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
  F13 = 124,
  F14 = 125,
  F15 = 126,
  F16 = 127,
  F17 = 128,
  F18 = 129,
  F19 = 130,
  F20 = 131,
  F21 = 132,
  F22 = 133,
  F23 = 134,
  F24 = 135,
  NUMLOCK = 144,
  Scroll = 145,
  OEM_NEC_EQUAL = 146,
  OEM_FJ_MASSHOU = 147,
  OEM_FJ_TOUROKU = 148,
  OEM_FJ_LOYA = 149,
  OEM_FJ_ROYA = 150,
  LeftShift = 160,
  RightShift = 161,
  LControl = 162,
  RControl = 163,
  LMenu = 164,
  RMenu = 165,
  Browser_Back = 166,
  Browser_Forward = 167,
  Browser_Refresh = 168,
  Browser_Stop = 169,
  Browser_Search = 170,
  Browser_Favourites = 171,
  Browser_Home = 172,
  Volume_Mute = 173,
  Volume_Down = 174,
  Volume_Up = 175,
  Media_Next = 176,
  Media_Prev = 177,
  Media_Stop = 178,
  Media_Pause = 179,
  Mail = 180,
  Media = 181,
  App1 = 182,
  App2 = 183,
  OEM_1 = 186,
  Plus = 187,
  Comma = 188,
  Minus = 189,
  Dot = 190,
  OEM_2 = 191,
  OEM_3 = 192,
}

type EventName =
  | "world-tick"
  | "leave-game"
  | "receive-chat"
  | "send-chat"
  | "render2d";

interface LatiteEvent {}

interface CancellableEvent extends LatiteEvent {
  /**
   * If true, the event will be cancelled. (Example: setting the bool to true in SendChatEvent will stop the chat message from being sent. This is useful for custom commands)
   */
  cancel: boolean;
}

interface SendChatEvent extends CancellableEvent {
  message: string;
}

interface ReceiveChatEvent extends LatiteEvent {
  message: string;
  sender: string;
  xuid: string;
}

interface ClientEvents {
  "world-tick": LatiteEvent;
  "leave-game": LatiteEvent;
  "receive-chat": ReceiveChatEvent;
  "send-chat": SendChatEvent;
  render2d: LatiteEvent;
}

interface Latite {
  /**
   * Listen to an event.
   */
  listen<K extends keyof ClientEvents>(
    eventName: K,
    listener: (event: ClientEvents[K]) => void
  ): void;

  /**
   * Shows a Latite toast on the top of the screen.
   * @param notif The notification to show.
   */
  showNotification(notif: string): void;

  /**
   * Runs a Latite command.
   * @param cmd The command to run. Do not add the prefix (.)
   * @returns The success of the command.
   */
  runCommand(cmd: string): boolean;

  /**
   * Gets the module manager. Use this to register modules.
   */
  getModuleManager(): ModuleManager;

  /**
   * The Latite Client version. Example: v1.4.0 (release), b1.4.0 (beta)
   */
  version: string;
}

declare const client: Latite;

interface ModuleManager {
  /**
   * Registers a module into the Latite mod. This makes it appear in the mod menu, and be interactive.
   * @param mod The module to register.
   */
  registerModule(mod: Module): void;

  /**
   * Gets a module by the specified InternalName.
   * For example, ArmorHud is the internal name for Armor Hud.
   * Position is the internal name of Coordinates
   * @param name The name of the module to get.
   */
  getModuleByName(name: string): Module | null;

  /**
   * Get a module by its ID.
   * All script modules will **always** have an id of 255.
   * This is not recommended to get script modules.
   * @param id The Module ID.
   */
  getModuleById(id: number): Module | null;

  /**
   * Loop through each module.
   * @param callback
   */
  forEachModule(callback: (mod: Module) => void): void;
}

/**
 * Must be registered by ModuleManager, otherwise it may cause a memory leak.
 */
declare class Module {
  name: string;
  displayName: string;
  description: string;
  key: KeyCode;

  /**
   * IDs for script modules are always 255.
   */
  readonly id: number;
  /**
   * If the module is a HUD module (that you can move in the hud editor)
   */
  readonly visual: boolean;
  /**
   * If the module is visible in the ClickGui
   */
  readonly visible: boolean;

  /**
   *
   * @param name The internal name of the module.
   * @param displayName The display name of the module. Shown in the ClickGUI.
   * @param description A short description of what the module does.
   * @param key The default keybind to activate the module.
   */
  constructor(
    name: string,
    displayName: string,
    description: string,
    key: KeyCode
  );

  // Calls when the module is enabled.
  onEnable: (() => void) | undefined;
  // Calls when module is disabled.
  onDisable: (() => void) | undefined;
  // Return true if you want behavior where it enables while the key is held, and disables when key is released.
  shouldHoldToToggle: (() => boolean) | undefined;

  /**
   * Checks if the module is enabled.
   */
  isEnabled(): boolean;

  /**
   * Set the module to be enabled or not.
   * @param b The new status of the module.
   */
  setEnabled(b: boolean): void;

  /**
   * Check if the module is blocked.
   */
  isBlocked(): boolean;
}

interface Script {
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
// @ts-ignore
declare function require(path: string): object;
