"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcryptjs');
const saltRounds = 10;
exports.hashPassword = (password) => bcrypt.hash(password, saltRounds);
// export const hashPassword = async (password: string) =>  {
//     try {
//         return await bcrypt.hash(password, saltRounds)
//     } catch(error) {
//         throw new Error(error);
//     }
// };
exports.comparePassword = (password, passwordHash) => bcrypt.compare(password, passwordHash);
//# sourceMappingURL=passwordHashing.js.map