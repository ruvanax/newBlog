import {Request, Response, NextFunction} from "express";

import User from '../models/UserModel';
import UserController from "../controllers/UserController";
import IApplicationRoute from '../core/IApplicationRoute';


interface UserSchema{
    username: string,
    password: string
}

const UserRoute: IApplicationRoute = {
    createRouter(router) {
        return router()
            .get('/', (req: Request, res: Response) => {
                const storage: User = new User();
                storage.getAll().then((users: object) =>{
                    res.json(users);
                });
            })
            .post('/register', (req: Request, res: Response, next:NextFunction) => {
                if (!req.body) {
                    res.send({msg:"Empty body request", code: 400});
                } else {
                    UserController.createNewUser(req.body, (newUser: UserSchema) => {
                        if(req.session) {
                            req.session.user = newUser;
                            res.status(200).send({message: "Успешно", user: newUser});
                        }
                    }, (msg:string, code:number) => {
                        res.status(code).send({message: msg});
                    });
                }
            })
            .post('/login', (req: Request, res: Response, next:NextFunction) => {
                if (!req.body) {
                    res.status(400).send({message: "Empty body request"});
                } else {
                    UserController.login(req.body, (user: UserSchema) => {
                        if (req.session) {
                            req.session.user = user;
                            res.status(200).send({message: "Успешно", user: user});
                        }else{
                            res.status(403);
                        }
                    }, (msg: string, code: number) => {
                        res.status(code).send({message: msg});
                    });
                }
            })
            .get('/current', (req: Request, res:Response, next: NextFunction) =>{
                if(req.session && req.session.user){
                    res.status(200).json(req.session.user);
                }else{
                    res.status(200).json({});
                }
            })
            .get('/logout', (req: Request, res: Response, next:NextFunction) =>{
                if(req.session){
                    req.session.destroy((err) => {
                        if (err) throw err;
                        if(req.session === undefined){
                            res.status(200).send({message: "Успешно"});
                        }
                    });
                }
            });
    }
};


export default UserRoute;


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