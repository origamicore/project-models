"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DecoratorModel {
    constructor(data) {
        if (!data)
            return;
        if (data.name)
            this.name = data.name;
        if (data.data)
            this.data = data.data;
    }
}
exports.default = DecoratorModel;
//# sourceMappingURL=DecoratorModel.js.map