"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const { hashPassword, comparePassword } = require('../models/passwordHashing');
const createNewUser = function (userData, onCreate, onError) {
    const storage = new user_1.default();
    // @ts-ignore
    storage.getByUsername(userData.username).then((user) => {
        if (user) {
            onError("Данный пользователь уже зарегитрирован!", 400);
        }
        hashPassword(userData.password).then((hash) => {
            let obj = {
                password: hash,
                username: userData.username
            };
            storage.create(obj).then((newUser) => {
                onCreate(newUser);
            });
        });
    });
};
const login = function (userData, onCreate, onError) {
    const storage = new user_1.default();
    // @ts-ignore
    storage.getByUsername(userData.username).then((user) => {
        if (!user) {
            onError("Пользователь с таким именем не найден!", 403);
        }
        // @ts-ignore
        comparePassword(userData.password, user.password).then((isMatch) => {
            if (!isMatch) {
                onError("Неверный пароль", 403);
            }
            else {
                onCreate(user);
            }
        });
    });
};
exports.default = {
    createNewUser,
    login
};
//# sourceMappingURL=userController.js.map