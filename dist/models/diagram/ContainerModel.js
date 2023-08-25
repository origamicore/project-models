"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerType = void 0;
class ContainerModel {
    constructor(data) {
        if (!data)
            return;
        this.type = data.type;
    }
}
exports.default = ContainerModel;
var ContainerType;
(function (ContainerType) {
    ContainerType[ContainerType["If"] = 1] = "If";
    ContainerType[ContainerType["Foreach"] = 2] = "Foreach";
    ContainerType[ContainerType["For"] = 3] = "For";
    ContainerType[ContainerType["While"] = 4] = "While";
    ContainerType[ContainerType["Try"] = 5] = "Try";
    ContainerType[ContainerType["Variable"] = 6] = "Variable";
})(ContainerType || (exports.ContainerType = ContainerType = {}));
//# sourceMappingURL=ContainerModel.js.map