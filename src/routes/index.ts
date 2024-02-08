import EC_SUPPLIERS from "../models/ec_suppliers";
import express, {Router,Request,Response} from 'express';
import jwt from "jsonwebtoken"
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from 'bcrypt';
import login from "../controllers/authentication/login";
const router=Router();
// const router=express.Router();
router.post("/registration", async (req:Request, res:Response) => {
    try{
    const {userType,full_name,email, password,profile_pic="none"} = req.body;

    if (!userType||!email || !password || !full_name) {
        return res.status(422).json({ "error": "Insufficient Data" });
    }
    if(userType==="supplier"){
        const newUser = await EC_SUPPLIERS.create({ e_mail: email, password:password,full_name:full_name,profile_pic:profile_pic },{raw:true});
    

        res.status(200).json({ "message": `Hi ${newUser?.full_name} , your registration_id is ${newUser.registration_id}your registered mail id is ${newUser.e_mail} and password is ${newUser.password}`});
    }
}
catch (error:any) {
    console.error('Error during login:', error);
    res.status(500).json({ "error": "Internal Server Error" });
}

    
});

router.post("/login", async (req:Request, res:Response) => {
    
login(req,res);
    
});

export default router;