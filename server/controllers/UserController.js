"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
const { hashPassword, comparePassword } = require('../models/SecurityService');
const createNewUser = function (userData, onCreate, onError) {
    const storage = new UserModel_1.default();
    if (userData.username !== undefined && userData.password !== undefined) {
        // @ts-ignore
        storage.getByUsername(userData.username).then((user) => {
            console.log("user", user);
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
        }).catch((error) => {
            onError(error, 500);
        });
    }
    else {
        onError("", 400);
    }
};
const login = function (userData, onCreate, onError) {
    const storage = new UserModel_1.default();
    if (userData.username !== undefined && userData.password !== undefined) {
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
            }).catch((error) => {
                onError(error, 500);
            });
        });
    }
    else {
        onError("", 400);
    }
};
exports.default = {
    createNewUser,
    login
};
//# sourceMappingURL=UserController.js.map