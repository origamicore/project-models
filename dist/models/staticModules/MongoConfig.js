"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupModel = exports.MongoConnection = void 0;
class MongoConfig {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.default = MongoConfig;
class MongoConnection {
    constructor(fields) {
        this.name = '';
        this.host = 'localhost';
        this.username = '';
        this.password = '';
        this.database = '';
        this.port = 27017;
        if (fields)
            Object.assign(this, fields);
    }
}
exports.MongoConnection = MongoConnection;
class BackupModel {
    constructor(fields) {
        this.path = '';
        this.tables = '';
        this.secPeriod = 0;
        if (fields)
            Object.assign(this, fields);
    }
}
exports.BackupModel = BackupModel;
//# sourceMappingURL=MongoConfig.js.map