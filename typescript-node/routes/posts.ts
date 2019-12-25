const express = require('express');
const router = express.Router();
import {Request, Response, NextFunction} from "express";

import Post = require('../models/post');


interface postSchema{
    theme: string,
    text: string,
    createdBy: string
}

interface resObject{
    message: string
}


router.get('/', async (req:any, res:any) =>{
    const storage: Post = new Post();
    const posts = await storage.getAll();
    res.json(posts);
});


router.route('/post')
    .post((req:Request, res:Response, next:NextFunction) =>{
        try{
            const body: any = req.body;
            const storage: Post = new Post();
            if(req.session && req.session.user){
                const postObj: postSchema = {
                    theme: body.theme,
                    text: body.text,
                    createdBy: req.session.user._id
                };
                storage.create(postObj).then((newPost: object) =>{
                    const resObj: resObject = {
                        message: "Успешно!"
                    };
                    res.status(200).send(resObj);
                });
            }
        } catch(error) {
            next(error)
        }
    });

router.route('/post')
    .get((req:Request, res:Response, next:NextFunction) =>{
        try{
            const storage: Post = new Post();
            storage.getAll().then((posts: object) =>{
                res.status(200).send(posts);
            });
        } catch(error) {
            next(error)
        }
    });




export = router;