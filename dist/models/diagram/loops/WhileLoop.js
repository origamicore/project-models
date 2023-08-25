"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerModel_1 = __importDefault(require("../ContainerModel"));
const DiagramContainer_1 = __importDefault(require("../DiagramContainer"));
const ConditionContainer_1 = __importDefault(require("../conditions/ConditionContainer"));
class WhileLoop extends ContainerModel_1.default {
    constructor(data) {
        super(data);
        if (!data)
            return;
        this.condition = new ConditionContainer_1.default(data.condition);
        this.container = new DiagramContainer_1.default(data.container);
    }
}
exports.default = WhileLoop;
//# sourceMappingURL=WhileLoop.js.map