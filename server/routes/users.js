"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const router = express.Router();
const user_1 = require("../models/user");
const userController_1 = require("../controllers/userController");
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const storage = new user_1.default();
    const users = yield storage.getAll();
    res.json(users);
}));
router.route('/register')
    .post((req, res, next) => {
    if (!req.body) {
        res.send({ msg: "Empty body request", code: 400 });
    }
    else {
        userController_1.default.createNewUser(req.body, (newUser) => {
            if (req.session) {
                req.session.user = newUser;
                res.status(200).send({ message: "Успешно", user: newUser });
            }
        }, (msg, code) => {
            res.status(code).send({ message: msg });
        });
    }
});
router.route('/login')
    .post((req, res, next) => {
    try {
        console.log("body", req.body);
        if (!req.body) {
            res.status(400).send({ message: "Empty body request" });
        }
        else {
            userController_1.default.login(req.body, (user) => {
                if (req.session) {
                    req.session.user = user;
                    res.status(200).send({ message: "Успешно", user: user });
                }
            }, (msg, code) => {
                res.status(code).send({ message: msg });
            });
        }
    }
    catch (e) {
        next(e);
    }
});
router.route('/current')
    .get((req, res, next) => {
    if (req.session && req.session.user) {
        res.status(200).json(req.session.user);
    }
    else {
        res.status(200).json({});
    }
});
router.route('/logout')
    .get((req, res, next) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err)
                throw err;
            if (req.session === undefined) {
                res.status(200).send({ message: "Успешно" });
            }
        });
    }
});
module.exports = router;
//# sourceMappingURL=users.js.map