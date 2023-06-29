/**
 * Must be registered by ModuleManager, otherwise it may cause a memory leak.
 */
export declare class Module {
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
