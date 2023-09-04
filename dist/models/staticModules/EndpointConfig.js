"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfig = exports.RedisSessionConfig = exports.LimitModel = exports.EndpointConnectionType = exports.EndpointConnection = void 0;
class EndpointConfig {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.default = EndpointConfig;
class EndpointConnection {
    constructor(data) {
        this.socketProtocol = 'echo-protocol';
        this.publicFolder = [];
        this.cors = [];
        Object.assign(this, data);
    }
}
exports.EndpointConnection = EndpointConnection;
class EndpointConnectionType {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.EndpointConnectionType = EndpointConnectionType;
EndpointConnectionType.Soucket = 'socket';
EndpointConnectionType.Express = 'express';
class LimitModel {
    constructor(data) {
        this.bodyLimit = 1; //MB
        this.urlLimit = 1; //MB
        Object.assign(this, data);
    }
}
exports.LimitModel = LimitModel;
class RedisSessionConfig {
    constructor(fields) {
        this.port = 6379;
        this.host = 'localhost';
        this.db = 0;
        this.secExpireTime = 1000 * 60 * 60;
        if (fields)
            Object.assign(this, fields);
    }
}
exports.RedisSessionConfig = RedisSessionConfig;
class JwtConfig {
    constructor(fields) {
        this.privateKey = '';
        this.publicKey = '';
        this.algorithm = '';
        this.secExpireTime = 1000 * 60 * 60;
        if (fields)
            Object.assign(this, fields);
    }
}
exports.JwtConfig = JwtConfig;
//# sourceMappingURL=EndpointConfig.js.map