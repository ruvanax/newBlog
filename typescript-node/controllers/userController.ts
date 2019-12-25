import User from '../models/user';
const {hashPassword, comparePassword} = require('../models/passwordHashing');


interface UserSchema{
    username: string,
    password: string
}

const createNewUser = function (userData: UserSchema, onCreate: any, onError: (msg: string, code: number) => void) : void{
    const storage: User = new User();
    // @ts-ignore
    storage.getByUsername(userData.username).then((user: any) =>{
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
    });
};

const login = function (userData: UserSchema, onCreate: any, onError: (msg: string, code: number) => void): void {
    const storage: User = new User();
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
        });
    });
};

export default {
    createNewUser,
    login
}
