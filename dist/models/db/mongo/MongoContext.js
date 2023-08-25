"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../../services/Tools"));
const MongoSchema_1 = __importDefault(require("./MongoSchema"));
class MongoContext {
    constructor(data) {
        this.schemas = [];
        if (!data)
            return;
        if (data.name)
            this.name = data.name;
        this.schemas = Tools_1.default.toArray(data.schemas, MongoSchema_1.default);
    }
}
exports.default = MongoContext;
//# sourceMappingURL=MongoContext.js.map