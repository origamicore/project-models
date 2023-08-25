"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tools {
    static toArray(data, cls) {
        var arr = [];
        if (Array.isArray(data))
            for (var a of data) {
                arr.push(new cls(a));
            }
        return arr;
    }
}
exports.default = Tools;
//# sourceMappingURL=Tools.js.map