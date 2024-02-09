import EC_SUPPLIERS from "../../models/ec_suppliers";
import express, {Router,Request,Response} from 'express';
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
const login =async(req:Request,res:Response):Promise<Response<any,Record<string, |{ message: string }| { error: string}>
>
>=>{
    try{
        
        const {userType,email, password} = req.body;
    
        if (!email || !password || !userType) {
            return res.status(422).json({ error: "Insufficient Data" });
        }
        if(userType==="supplier"){
        const user = await EC_SUPPLIERS.findOne({
            where: {
                e_mail: email
            }
        });
        if(user && bcrypt.compareSync(password,user.password)){
        const token=jwt.sign({user_reg_id:user?.registration_id,userType},"your_secret",{expiresIn:"24h"})
    
        res.status(200).json({ message: `Login successful ${token}`});
        }else{
           return res.status(500).json({ error: "Password Incorrect" });
    
        }

        
    }
    
    }
    catch (error:any) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({message: "hello"});
}
export default login