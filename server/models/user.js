"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Storage = require('./storage');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});
const UserModel = mongoose.model('user', userSchema);
class User extends Storage {
    constructor() {
        super(UserModel);
    }
    getByUsername(username) {
        return this.model.findOne({ username });
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map