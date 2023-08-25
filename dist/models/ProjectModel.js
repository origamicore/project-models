"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("../services/Tools"));
const StaticModules_1 = __importDefault(require("./StaticModules"));
const MongoContext_1 = __importDefault(require("./db/mongo/MongoContext"));
const ModuleModel_1 = __importDefault(require("./manual/ModuleModel"));
class ProjectModel {
    constructor(data) {
        this.modules = [];
        this.staticModules = [];
        this.mongoContext = [];
        if (!data)
            return;
        Object.assign(this, data);
        this._id = this.id;
        this.modules = Tools_1.default.toArray(data.modules, ModuleModel_1.default);
        this.staticModules = Tools_1.default.toArray(data.staticModules, StaticModules_1.default);
        this.mongoContext = Tools_1.default.toArray(data.mongoContext, MongoContext_1.default);
    }
}
exports.default = ProjectModel;
//# sourceMappingURL=ProjectModel.js.map