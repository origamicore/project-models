"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerModel_1 = __importDefault(require("../ContainerModel"));
const DiagramContainer_1 = __importDefault(require("../DiagramContainer"));
class ForeachLoop extends ContainerModel_1.default {
    constructor(data) {
        super(data);
        if (!data)
            return;
        if (data.objectName)
            this.objectName = data.objectName;
        if (data.array)
            this.array = data.array;
        this.container = new DiagramContainer_1.default(data.container);
    }
}
exports.default = ForeachLoop;
//# sourceMappingURL=ForeachLoop.js.map