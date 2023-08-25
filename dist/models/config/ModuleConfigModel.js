"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../services/Tools"));
const DecoratorModel_1 = __importDefault(require("../DecoratorModel"));
const PropertyModel_1 = __importDefault(require("../entity/PropertyModel"));
class ModuleConfigModel {
    constructor(data) {
        if (!data)
            return;
        this.decorator = new DecoratorModel_1.default(data.decorator);
        this.properies = Tools_1.default.toArray(data.properies, PropertyModel_1.default);
    }
}
exports.default = ModuleConfigModel;
//# sourceMappingURL=ModuleConfigModel.js.map