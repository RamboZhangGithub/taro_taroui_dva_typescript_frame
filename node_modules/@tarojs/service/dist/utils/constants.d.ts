export declare const CONFIG_DIR_NAME = "config";
export declare const DEFAULT_CONFIG_FILE = "index";
export declare const PRESET_PREFIX = "@tarojs/preset-";
export declare const PLUGIN_PREFIX = "@tarojs/plugin-";
export declare const IS_EVENT_HOOK: RegExp;
export declare const IS_ADD_HOOK: RegExp;
export declare const IS_MODIFY_HOOK: RegExp;
export declare const presetOrPluginPrefixReg: RegExp;
export declare enum PluginType {
    Preset = "Preset",
    Plugin = "Plugin"
}
export declare const PluginNamePrefix: {
    Preset: string;
    Plugin: string;
};
