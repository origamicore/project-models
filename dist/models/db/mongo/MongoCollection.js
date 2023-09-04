"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoCollection {
    constructor(data) {
        if (!data)
            return;
        if (data.type)
            this.type = data.type;
        if (data.name)
            this.name = data.name;
        if (data.collectionName)
            this.collectionName = data.collectionName;
    }
}
exports.default = MongoCollection;
//# sourceMappingURL=MongoCollection.js.map