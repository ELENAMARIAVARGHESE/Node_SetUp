import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifySuperAdmin = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  token = token?.split("Bearer ")[1];

  jwt.verify(token as string, 'your_secret_admin', (err, decoded) => {
    const { user_reg_id } = decoded as { user_reg_id: string };

    // Check if user_reg_id is equal to 1
    if (user_reg_id === '1') {
      req.body.jwt_decoded = decoded;
      next();
    } else {
      return res.status(403).json({ error: "Access forbidden for this user" });
    }
  });
};

export default verifySuperAdmin;












// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken"

// const verifySuperAdmin=(req:Request,res:Response,next:NextFunction)=>{
//     let token=req.headers.authorization;
//     if(!token){
//         return res.status(401).json({error:"Token not provided"});
//     }
//     token=token?.split("Bearer ")[1];

//     jwt.verify(token as string,'your_secret_admin',(err,decoded)=>{
//         if(err){
//             return res.status(401).json({error:"Failed to authenticate token"});
//         }
//         req.body.jwt_decoded=decoded;
//         next();

//     })

 

// }
// export default verifySuperAdmin;