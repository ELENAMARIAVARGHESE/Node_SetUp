import EC_SUPPLIERS from "../../models/ec_suppliers";
import {Request,Response} from 'express';
const register =async(req:Request,res:Response):Promise<any
>=>{
try{
    const {userType,full_name,email, password,profile_pic="none"} = req.body;

    if (!userType||!email || !password || !full_name) {
        return res.status(422).json({ "error": "Insufficient Data" });
    }
    if(userType==="supplier"){
        const newUser = await EC_SUPPLIERS.create({ e_mail: email, password:password,full_name:full_name,profile_pic:profile_pic },{raw:true});
    

        return res.status(200).json({ "message": `Hi ${newUser?.full_name} , your registration_id is ${newUser.registration_id}your registered mail id is ${newUser.e_mail} and password is ${newUser.password}`});
    }
}
catch (error:any) {
    console.error('Error during login:', error);
    return res.status(500).json({ "error": "Internal Server Error" });

}
}
export default register;