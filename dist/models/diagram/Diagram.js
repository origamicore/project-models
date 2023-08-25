"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiagramContainer_1 = __importDefault(require("./DiagramContainer"));
class Diagram {
    constructor(data) {
        if (!data)
            return;
        this.contrainer = new DiagramContainer_1.default(data.contrainer);
    }
}
exports.default = Diagram;
//# sourceMappingURL=Diagram.js.map