"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerModel_1 = __importDefault(require("../ContainerModel"));
const DiagramContainer_1 = __importDefault(require("../DiagramContainer"));
class ForLoop extends ContainerModel_1.default {
    constructor(data) {
        super(data);
        this.step = 1;
        if (!data)
            return;
        if (data.indexName)
            this.indexName = data.indexName;
        if (data.start)
            this.start = data.start;
        if (data.end)
            this.end = data.end;
        if (data.step)
            this.step = data.step;
        this.container = new DiagramContainer_1.default(data.container);
    }
}
exports.default = ForLoop;
//# sourceMappingURL=ForLoop.js.map