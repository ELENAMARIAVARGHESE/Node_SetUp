import EC_CUSTOMERS from "../../models/ec_customer";
import {Request,Response} from 'express';
const cregister =async(req:Request,res:Response):Promise<any
>=>{
try{
    const {userType,full_name,email, password,profile_pic="image",invitee} = req.body;

    if (!userType||!email || !password || !full_name) {
        return res.status(422).json({ error: "Insufficient Data" });
    }
    if(userType==="customer"){
       const newUser = await EC_CUSTOMERS.create({ e_mail: email, password:password,full_name:full_name,profile_pic:profile_pic,invitee:invitee },{raw:true});
       return res.status(200).json({ message: `Hi ${newUser.full_name}, your registered mailID is ${newUser.e_mail}` });


    }

}
catch (error:any) {
    console.error('Error during login:', error);
    return res.status(500).json({ "error": "Internal Server Error" });

}
}
export default cregister;