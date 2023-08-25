"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiagramContainer_1 = __importDefault(require("../DiagramContainer"));
const ConditionModel_1 = __importDefault(require("./ConditionModel"));
class ConditionContainer {
    constructor(data) {
        if (!data)
            return;
        this.condition = new ConditionModel_1.default(data.condition);
        this.container = new DiagramContainer_1.default(data.container);
    }
}
exports.default = ConditionContainer;
//# sourceMappingURL=ConditionContainer.js.map