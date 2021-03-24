"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = void 0;
const utils_1 = require("./utils");
function parseJSON(json) {
    if (!json) {
        return;
    }
    return utils_1.buildTemplate(`(${json})`);
}
exports.parseJSON = parseJSON;
//# sourceMappingURL=json.js.map