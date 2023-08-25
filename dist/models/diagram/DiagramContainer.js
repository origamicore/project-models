"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerModel_1 = require("./ContainerModel");
const IfCondition_1 = __importDefault(require("./conditions/IfCondition"));
const ForLoop_1 = __importDefault(require("./loops/ForLoop"));
const ForeachLoop_1 = __importDefault(require("./loops/ForeachLoop"));
const WhileLoop_1 = __importDefault(require("./loops/WhileLoop"));
const TryModel_1 = __importDefault(require("./other/TryModel"));
const VariableModel_1 = __importDefault(require("./other/VariableModel"));
class DiagramContainer {
    constructor(data) {
        if (!data)
            return;
        this.models = [];
        if (data.models) {
            for (let model of data.models) {
                switch (model.type) {
                    case (ContainerModel_1.ContainerType.If): this.models.push(new IfCondition_1.default(model));
                    case (ContainerModel_1.ContainerType.Foreach): this.models.push(new ForeachLoop_1.default(model));
                    case (ContainerModel_1.ContainerType.For): this.models.push(new ForLoop_1.default(model));
                    case (ContainerModel_1.ContainerType.While): this.models.push(new WhileLoop_1.default(model));
                    case (ContainerModel_1.ContainerType.Try): this.models.push(new TryModel_1.default(model));
                    case (ContainerModel_1.ContainerType.Variable): this.models.push(new VariableModel_1.default(model));
                }
            }
        }
    }
}
exports.default = DiagramContainer;
//# sourceMappingURL=DiagramContainer.js.map