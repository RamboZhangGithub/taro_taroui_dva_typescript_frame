"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCacheWxml = exports.getCacheWxml = void 0;
const lodash_1 = require("lodash");
const cacheMap = new Map();
function getCacheWxml(dirpath) {
    return lodash_1.cloneDeep(cacheMap.get(dirpath));
}
exports.getCacheWxml = getCacheWxml;
function saveCacheWxml(dirpath, wxml) {
    cacheMap.set(dirpath, lodash_1.cloneDeep(wxml));
}
exports.saveCacheWxml = saveCacheWxml;
//# sourceMappingURL=cache.js.map