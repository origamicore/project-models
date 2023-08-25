"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoSchema {
    constructor(data) {
        if (!data)
            return;
        if (data.dbContext)
            this.dbContext = data.dbContext;
        if (data.type)
            this.type = data.type;
        if (data.name)
            this.name = data.name;
        if (data.collectionName)
            this.collectionName = data.collectionName;
    }
}
exports.default = MongoSchema;
//# sourceMappingURL=MongoSchema.js.map