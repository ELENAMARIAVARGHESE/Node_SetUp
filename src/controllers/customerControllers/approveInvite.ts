import {Request,Response} from 'express';
import EC_SUPPLIER_CUSTOMER_MAPPING from "../../models/ec_suppliercustomermapping";
import EC_CUSTOMERS from "../../models/ec_customer";
const approveInvite =async(req:Request,res:Response):Promise<any>=>{
    try{
        const {supplier_id,customer_id,status} = req.body;
    
        if (!supplier_id||!customer_id||!status) {
            return res.status(422).json({ error: "Insufficient Data" });
        }
        
        const users = await EC_SUPPLIER_CUSTOMER_MAPPING.findAll({
            where: {
                customer_id: customer_id
            }
        });
        const invite = await EC_SUPPLIER_CUSTOMER_MAPPING.findOne({
            where: {
                customer_id: customer_id,
                supplier_id:supplier_id
                
            }
        });
        const customer = await EC_CUSTOMERS.findOne({
            where: {
                id: customer_id
            }
        });
    
        if (!users) {
            return res.status(404).json({error: "Invalid invite"});
        }
    
        if(invite && invite.status==="pending"){
        await invite.update({ status: status });
        await customer?.update({ invitee: invite.supplier_id });
    
        return res.status(200).json({message:`Status has successfully changed to ${status}`});
        }
        if(status==="accept"){
            for (const user of users) {
                if (user.status === "pending") {
                    await user.update({ status: "rejected" });
                }
            }

        }
    
    
    }
    catch (error:any) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal Server Error" });
}
}
export default approveInvite;