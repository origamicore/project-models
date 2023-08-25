"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingleCondition {
    constructor(data) {
        if (!data)
            return;
        if (data.operation)
            this.operation = data.operation;
        if (data.leftSide)
            this.leftSide = data.leftSide;
        if (data.rightSide)
            this.rightSide = data.rightSide;
    }
}
exports.default = SingleCondition;
//# sourceMappingURL=SingleCondition.js.map