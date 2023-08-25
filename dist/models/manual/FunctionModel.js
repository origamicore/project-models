"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../services/Tools"));
const Diagram_1 = __importDefault(require("../diagram/Diagram"));
const InputVariable_1 = __importDefault(require("./InputVariable"));
class FunctionModel {
    constructor(data) {
        this.isAsync = true;
        this.variables = [];
        if (!data)
            return;
        this.variables = Tools_1.default.toArray(data.variables, InputVariable_1.default);
        this.output = new InputVariable_1.default(data.output);
        this.diagram = new Diagram_1.default(data.diagram);
        if (data.isAsync)
            this.isAsync = data.isAsync;
        if (data.name)
            this.name = data.name;
    }
}
exports.default = FunctionModel;
//# sourceMappingURL=FunctionModel.js.map