"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../services/Tools"));
const DecoratorModel_1 = __importDefault(require("../DecoratorModel"));
const FunctionModel_1 = __importDefault(require("../manual/FunctionModel"));
const PropertyModel_1 = __importDefault(require("./PropertyModel"));
class EntityModel {
    constructor(data) {
        if (!data)
            return;
        this.name = data.name;
        this.properies = Tools_1.default.toArray(data.properies, PropertyModel_1.default);
        this.functions = Tools_1.default.toArray(data.functions, FunctionModel_1.default);
        this.decorator = new DecoratorModel_1.default(data.decorator);
    }
}
exports.default = EntityModel;
//# sourceMappingURL=EntityModel.js.map