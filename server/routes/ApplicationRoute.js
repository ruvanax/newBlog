"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoute_1 = require("./UserRoute");
const PostRoute_1 = require("./PostRoute");
class AppRoutes {
    constructor() {
        this.routeList = [
            { path: '/rest/users', router: UserRoute_1.default },
            { path: '/rest/posts', router: PostRoute_1.default }
        ];
    }
    mount(expApp) {
        this.routeList.forEach((item) => {
            expApp.use(item.path, item.router.createRouter(express_1.Router));
        });
    }
}
exports.default = AppRoutes;
//# sourceMappingURL=ApplicationRoute.js.map