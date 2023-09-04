"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../../../services/Tools"));
const MongoCollection_1 = __importDefault(require("./MongoCollection"));
class MongoDatabase {
    constructor(data) {
        this.schemas = [];
        if (!data)
            return;
        if (data.name)
            this.name = data.name;
        this.schemas = Tools_1.default.toArray(data.schemas, MongoCollection_1.default);
    }
}
exports.default = MongoDatabase;
//# sourceMappingURL=MongoDatabase.js.map