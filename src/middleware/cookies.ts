import { NextFunction, Request, Response } from "express";

const X_API_KEY = 'elenaMariaVarghese';
const middleware=(req:Request,res:Response,next:NextFunction)=>{
    const apiKey = req.headers['x-api-key'];
    res.setHeader("Set-Cookie",["name=elena","subject=node"]);
    if (apiKey && apiKey === X_API_KEY) {
        next();
      } else {
        return res.status(403).json({ error: 'No access' });
      }
}
export default middleware;