import {Request,Response} from 'express';
import EC_SUPPLIER_CUSTOMER_MAPPING from "../../models/ec_suppliercustomermapping";
import EC_CUSTOMERS from "../../models/ec_customer";
import EC_SUPPLIERS  from "../../models/ec_suppliers";
const approveInvite =async(req:Request,res:Response):Promise<any>=>{
    try{
        const {customer_id,status} = req.body;
    
        if (!customer_id||!status) {
            return res.status(422).json({ error: "Insufficient Data" });
        }
        
        const user = await EC_SUPPLIER_CUSTOMER_MAPPING.findOne({
            where: {
                customer_id: customer_id
            }
        });
        const customer = await EC_CUSTOMERS.findOne({
            where: {
                id: customer_id
            }
        });
    
        if (!user) {
            return res.status(404).json({ error: "You have no invites" });
        }
    
        if(user && customer){
        await user.update({ status: status });
        await user.update({ invitee: user.supplier_id });
    
        return res.status(200).json({message:`Status has successfully changed to ${status}`});
        }
    
    
    }
    catch (error:any) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal Server Error" });
}
}
export default approveInvite;