"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DecoratorModel_1 = __importDefault(require("../DecoratorModel"));
class PropertyModel {
    constructor(data) {
        if (!data)
            return;
        this.decorator = new DecoratorModel_1.default(data.decorator);
        if (data.name)
            this.name = data.name;
        if (data.description)
            this.description = data.description;
        if (data.type)
            this.type = data.type;
        if (data.defaultValue)
            this.defaultValue = data.defaultValue;
        if (data.isArray)
            this.isArray = data.isArray;
    }
}
exports.default = PropertyModel;
//# sourceMappingURL=PropertyModel.js.map