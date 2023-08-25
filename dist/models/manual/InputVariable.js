"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DecoratorModel_1 = __importDefault(require("../DecoratorModel"));
class InputVariable {
    constructor(data) {
        this.isRequired = true;
        if (!data)
            return;
        this.decorator = new DecoratorModel_1.default(data.decorator);
        if (data.name)
            this.name = data.name;
        if (data.classType)
            this.classType = data.classType;
        if (data.basicType)
            this.basicType = data.basicType;
        if (data.isRequired)
            this.isRequired = data.isRequired;
        if (data.type)
            this.type = data.type;
    }
}
exports.default = InputVariable;
//# sourceMappingURL=InputVariable.js.map