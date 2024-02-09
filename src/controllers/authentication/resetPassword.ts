import EC_SUPPLIERS from "../../models/ec_suppliers";
import {Request,Response} from 'express';
const resetPassword =async(req:Request,res:Response):Promise<any>=>{
    try{
        const {userType,email,newPassword} = req.body;
    
        if (!email ||!userType||!newPassword) {
            return res.status(422).json({ "error": "Insufficient Data" });
        }
        // if(userType==="supplier"){
        const user = await EC_SUPPLIERS.findOne({
            where: {
                e_mail: email
            }
        });
    
        if (!user) {
            return res.status(404).json({ "error": "User not found" });
        }
    
        // Update the password with the new password
        await user.update({ password: newPassword });
    
        return res.status(200).json({"full_name":`${user.full_name}`,"email":`${user.e_mail}`,"password":`${user.password}`,"profile_pic":`${user.profile_pic}`,"registration_id":`${user.registration_id}`,"registration_time_stamp":`${user.registration_time_stamp}`});
    //}
    
    }
    catch (error:any) {
        console.error('Error during login:', error);
        return res.status(500).json({ "error": "Internal Server Error" });
}
}
export default resetPassword;