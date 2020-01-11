import IApplicationRoute from "../core/IApplicationRoute";

import {Request, Response, NextFunction} from "express";
import PostController from "../controllers/PostController";


interface postSchema{
    theme: string,
    text: string,
    createdBy: string
}

const PostRoute: IApplicationRoute = {
    createRouter(router) {
        return router()
            .post('/post', (req:Request, res:Response, next: NextFunction) =>{
                if(req.session && req.session.user){
                    const postObj: postSchema = {
                        theme: req.body.theme,
                        text: req.body.text,
                        createdBy: req.session.user._id
                    };
                    PostController.createNewPost(postObj, () =>{
                        res.status(200).send({message: "Успешно"});
                    },(msg:string, code:number) => {
                        res.status(code).send({message: msg});
                    });
                }else{
                    res.status(403);
                }
            })
            .get('/post', (req:Request, res:Response, next: NextFunction) =>{
                if(req.session && req.session.user){
                    PostController.getAllThemes((themes: object) =>{
                        res.status(200).send({message: "Успешно", themes});
                    }, (msg:string, code:number) => {
                        res.status(code).send({message: msg});
                    });
                }else{
                    res.status(403);
                }
            })
            .get('/openTheme/:id', (req:Request, res:Response, next: NextFunction) =>{
                if(req.session && req.session.user){
                    PostController.getSingleTheme(req.params.id, (theme: object)=>{
                        res.status(200).send({message: "Успешно", theme});
                    },(msg:string, code:number) => {
                        res.status(code).send({message: msg});
                    });
                }
            })
    }
};



export default PostRoute;




