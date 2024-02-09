import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

const middlewareJWTVerify=(req:Request,res:Response,next:NextFunction)=>{
    let token=req.headers.authorization;
    if(!token){
        return res.status(401).json({error:"Token not provided"});
    }
    token=token?.split("Bearer ")[1];

    jwt.verify(token as string,'your_secret',(err,decoded)=>{
        if(err){
            return res.status(401).json({error:"Failed to authenticate token"});
        }
        req.body.jwt_decoded=decoded;
        next();

    })

 

}
export default middlewareJWTVerify;