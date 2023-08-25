"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SingleCondition_1 = __importDefault(require("./SingleCondition"));
class ConditionModel {
    constructor(data) {
        var _a, _b;
        if (!data)
            return;
        if (data.operation)
            this.operation = data.operation;
        if ((_a = data.left) === null || _a === void 0 ? void 0 : _a.leftSide) {
            this.left = new SingleCondition_1.default(data.left);
        }
        else {
            this.left = new ConditionModel(data.left);
        }
        if ((_b = data.right) === null || _b === void 0 ? void 0 : _b.leftSide) {
            this.right = new SingleCondition_1.default(data.right);
        }
        else {
            this.right = new ConditionModel(data.right);
        }
    }
}
exports.default = ConditionModel;
//# sourceMappingURL=ConditionModel.js.map