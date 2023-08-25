"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StaticModule {
    constructor(data) {
        this.enable = false;
        if (!data)
            return;
        if (data.enable)
            this.enable = data.enable;
        if (data.name)
            this.name = data.name;
        if (data.config)
            this.config = data.config;
    }
}
exports.default = StaticModule;
//# sourceMappingURL=StaticModules.js.map