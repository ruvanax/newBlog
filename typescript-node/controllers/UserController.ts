import User from '../models/UserModel';
const {hashPassword, comparePassword} = require('../models/SecurityService');


interface UserSchema{
    username: string,
    password: string
}

const createNewUser = function (userData: UserSchema, onCreate: any, onError: (msg: string, code: number) => void) : void{
    const storage: User = new User();
    if(userData.username !== undefined && userData.password !== undefined){
        // @ts-ignore
        storage.getByUsername(userData.username).then((user: any) =>{
            console.log("user", user);
            if (user) {
                onError("Данный пользователь уже зарегитрирован!", 400);
            }
            hashPassword(userData.password).then((hash: string) =>{
                let obj: UserSchema = {
                    password: hash,
                    username: userData.username
                };
                storage.create(obj).then((newUser: any) =>{
                    onCreate(newUser);
                })
            });
        }).catch((error: any) =>{
            onError(error, 500);
        });
    }else{
        onError("", 400);
    }
};

const login = function (userData: UserSchema, onCreate: any, onError: (msg: string, code: number) => void): void {
    const storage: User = new User();
    if(userData.username !== undefined && userData.password !== undefined) {
        // @ts-ignore
        storage.getByUsername(userData.username).then((user: object) => {
            if (!user) {
                onError("Пользователь с таким именем не найден!", 403);
            }
            // @ts-ignore
            comparePassword(userData.password, user.password).then((isMatch: boolean) => {
                if (!isMatch) {
                    onError("Неверный пароль", 403);
                } else {
                    onCreate(user);
                }
            }).catch((error: any) => {
                onError(error, 500);
            });
        });
    }else{
        onError("", 400);
    }
};

export default {
    createNewUser,
    login
}
