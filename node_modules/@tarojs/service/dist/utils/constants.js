"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginNamePrefix = exports.PluginType = exports.presetOrPluginPrefixReg = exports.IS_MODIFY_HOOK = exports.IS_ADD_HOOK = exports.IS_EVENT_HOOK = exports.PLUGIN_PREFIX = exports.PRESET_PREFIX = exports.DEFAULT_CONFIG_FILE = exports.CONFIG_DIR_NAME = void 0;
exports.CONFIG_DIR_NAME = 'config';
exports.DEFAULT_CONFIG_FILE = 'index';
exports.PRESET_PREFIX = '@tarojs/preset-';
exports.PLUGIN_PREFIX = '@tarojs/plugin-';
exports.IS_EVENT_HOOK = /^on/;
exports.IS_ADD_HOOK = /^add/;
exports.IS_MODIFY_HOOK = /^modify/;
exports.presetOrPluginPrefixReg = new RegExp(`^${exports.PRESET_PREFIX}|${exports.PLUGIN_PREFIX}`);
var PluginType;
(function (PluginType) {
    PluginType["Preset"] = "Preset";
    PluginType["Plugin"] = "Plugin";
})(PluginType = exports.PluginType || (exports.PluginType = {}));
exports.PluginNamePrefix = {
    [PluginType.Preset]: exports.PLUGIN_PREFIX,
    [PluginType.Plugin]: exports.PLUGIN_PREFIX
};
