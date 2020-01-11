"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
const UserController_1 = require("../controllers/UserController");
const UserRoute = {
    createRouter(router) {
        return router()
            .get('/', (req, res) => {
            const storage = new UserModel_1.default();
            storage.getAll().then((users) => {
                res.json(users);
            });
        })
            .post('/register', (req, res, next) => {
            if (!req.body) {
                res.send({ msg: "Empty body request", code: 400 });
            }
            else {
                UserController_1.default.createNewUser(req.body, (newUser) => {
                    if (req.session) {
                        req.session.user = newUser;
                        res.status(200).send({ message: "Успешно", user: newUser });
                    }
                }, (msg, code) => {
                    res.status(code).send({ message: msg });
                });
            }
        })
            .post('/login', (req, res, next) => {
            if (!req.body) {
                res.status(400).send({ message: "Empty body request" });
            }
            else {
                UserController_1.default.login(req.body, (user) => {
                    if (req.session) {
                        req.session.user = user;
                        res.status(200).send({ message: "Успешно", user: user });
                    }
                    else {
                        res.status(403);
                    }
                }, (msg, code) => {
                    res.status(code).send({ message: msg });
                });
            }
        })
            .get('/current', (req, res, next) => {
            if (req.session && req.session.user) {
                res.status(200).json(req.session.user);
            }
            else {
                res.status(200).json({});
            }
        })
            .get('/logout', (req, res, next) => {
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
    }
};
exports.default = UserRoute;
// router.get('/', async (req:any, res:any) =>{
//     const storage: User = new User();
// 	const users = await storage.getAll();
// 	res.json(users);
// });
//
// router.route('/register')
// 	.post((req:Request, res:Response, next:NextFunction) =>{
//         if (!req.body) {
//             res.send({msg:"Empty body request", code: 400});
//         } else {
//             UserController.createNewUser(req.body, (newUser: UserSchema) => {
//                 if(req.session) {
//                     req.session.user = newUser;
//                     res.status(200).send({message: "Успешно", user: newUser});
//                 }
//             }, (msg:string, code:number) => {
//                 res.status(code).send({message: msg});
//             });
//         }
// 	});
//
// router.route('/login')
//   .post( (req:Request, res:Response, next:NextFunction) =>{
//       try{
//           console.log("body", req.body);
//           if (!req.body) {
//               res.status(400).send({message: "Empty body request"});
//           } else {
//               UserController.login(req.body, (user: UserSchema) => {
//                   if (req.session) {
//                       req.session.user = user;
//                       res.status(200).send({message: "Успешно", user: user});
//                   }
//               }, (msg: string, code: number) => {
//                   res.status(code).send({message: msg});
//               });
//           }
//       }catch (e) {
//           next(e);
//       }
//   });
//
// router.route('/current')
//     .get((req:Request, res:Response, next:NextFunction) => {
//         if(req.session && req.session.user){
//             res.status(200).json(req.session.user);
//         }else{
//             res.status(200).json({});
//         }
//     });
//
// router.route('/logout')
// 	.get((req:Request, res:Response, next:NextFunction) => {
// 	    if(req.session){
// 	        req.session.destroy((err) => {
// 	            if (err) throw err;
// 	            if(req.session === undefined){
// 	                res.status(200).send({message: "Успешно"});
// 	            }
// 	        });
// 	    }
// 	});
//# sourceMappingURL=UserRoute.js.map