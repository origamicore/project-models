"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerModel_1 = __importDefault(require("../ContainerModel"));
const DiagramContainer_1 = __importDefault(require("../DiagramContainer"));
class TryModel extends ContainerModel_1.default {
    constructor(data) {
        super(data);
        if (!data)
            return;
        if (data.catchType)
            this.catchType = data.catchType;
        this.catchContainer = new DiagramContainer_1.default(data.catchContainer);
        this.mainContainer = new DiagramContainer_1.default(data.mainContainer);
    }
}
exports.default = TryModel;
//# sourceMappingURL=TryModel.js.map