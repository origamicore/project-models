"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerModel_1 = __importDefault(require("../ContainerModel"));
class VariableModel extends ContainerModel_1.default {
    constructor(data) {
        super(data);
        if (!data)
            return;
        if (data.name)
            this.name = data.name;
        if (data.value)
            this.value = data.value;
        if (data.varType)
            this.varType = data.varType;
    }
}
exports.default = VariableModel;
//# sourceMappingURL=VariableModel.js.map