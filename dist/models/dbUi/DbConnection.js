"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbConnection {
    constructor(data) {
        this.host = 'localhost';
        this.port = 27017;
        Object.assign(this, data);
    }
}
exports.default = DbConnection;
//# sourceMappingURL=DbConnection.js.map