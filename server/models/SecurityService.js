"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcryptjs');
const saltRounds = 10;
exports.hashPassword = (password) => bcrypt.hash(password, saltRounds);
exports.comparePassword = (password, passwordHash) => bcrypt.compare(password, passwordHash);
//# sourceMappingURL=SecurityService.js.map