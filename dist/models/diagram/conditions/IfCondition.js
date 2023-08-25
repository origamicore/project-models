"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../../services/Tools"));
const ContainerModel_1 = __importDefault(require("../ContainerModel"));
const ConditionContainer_1 = __importDefault(require("./ConditionContainer"));
class IfCondition extends ContainerModel_1.default {
    constructor(data) {
        super(data);
        this.conditions = [];
        if (!data)
            return;
        this.conditions = Tools_1.default.toArray(data.conditions, ConditionContainer_1.default);
        this.elseCondition = new ConditionContainer_1.default(data.elseCondition);
    }
}
exports.default = IfCondition;
//# sourceMappingURL=IfCondition.js.map