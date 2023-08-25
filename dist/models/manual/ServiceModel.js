"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../services/Tools"));
const DecoratorModel_1 = __importDefault(require("../DecoratorModel"));
const Diagram_1 = __importDefault(require("../diagram/Diagram"));
const InputVariable_1 = __importDefault(require("./InputVariable"));
class ServiceModel {
    constructor(data) {
        this.decorators = [];
        this.variables = [];
        if (!data)
            return;
        if (data.name)
            this.name = data.name;
        if (data.tag)
            this.tag = data.tag;
        this.decorators = Tools_1.default.toArray(data.decorators, DecoratorModel_1.default);
        this.variables = Tools_1.default.toArray(data.variables, InputVariable_1.default);
        this.output = new InputVariable_1.default(data.output);
        this.diagram = new Diagram_1.default(data.diagram);
    }
}
exports.default = ServiceModel;
//# sourceMappingURL=ServiceModel.js.map