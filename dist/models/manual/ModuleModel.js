"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../services/Tools"));
const ModuleConfigModel_1 = __importDefault(require("../config/ModuleConfigModel"));
const FunctionModel_1 = __importDefault(require("./FunctionModel"));
const ServiceModel_1 = __importDefault(require("./ServiceModel"));
class ModuleModel {
    constructor(data) {
        this.enable = false;
        this.functions = [];
        this.services = [];
        if (!data)
            return;
        if (data.enable)
            this.enable = data.enable;
        if (data.name)
            this.name = data.name;
        this.functions = Tools_1.default.toArray(data.functions, FunctionModel_1.default);
        this.services = Tools_1.default.toArray(data.services, ServiceModel_1.default);
        this.config = new ModuleConfigModel_1.default(data.config);
    }
}
exports.default = ModuleModel;
//# sourceMappingURL=ModuleModel.js.map