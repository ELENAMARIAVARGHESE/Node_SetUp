import {Request, Response} from "express";
import EC_SUPPLIERS  from "../../models/ec_suppliers";
import EC_CUSTOMERS from "../../models/ec_customer";
import EC_SUBSCRIPTION_PLAN from "../../models/ec_subscriptionPlan";
import EC_SUPPLIER_CUSTOMER_MAPPING from "../../models/ec_suppliercustomermapping";
 
const sendInvite = async (req: Request,res: Response) =>{
    try{
        const {supplier_id, customer_id} = req.body;
        const findCustomer = await EC_CUSTOMERS.findOne({where: {id : customer_id}});
        const findSupplier = await EC_SUPPLIERS.findOne({where: {registration_id : supplier_id}});

 
        if(findCustomer && findSupplier)
        {
            const findSupplierInvitingCustomers = await EC_SUPPLIER_CUSTOMER_MAPPING.findAll({where : {supplier_id : supplier_id}});
            const supplierInviteCount = findSupplierInvitingCustomers.length;
 
            const findSupplier = await EC_SUPPLIERS.findOne({where : {registration_id : supplier_id}});
            const planName = findSupplier?.purchased_subscription_type;
 
            const findPlan = await EC_SUBSCRIPTION_PLAN.findOne({where : {subscription_name : planName}});
            let maximum_number_of_customers = findPlan?.no_of_customers;
 
            if(maximum_number_of_customers === undefined)
                maximum_number_of_customers = 0;
 
            if(supplierInviteCount < maximum_number_of_customers)
            {
                if(findCustomer.invitee === "null")
                {
                    //findCustomer.invitee = supplier_id;
                    //findCustomer.save();
 
                    const newSubscription = EC_SUPPLIER_CUSTOMER_MAPPING.create({supplier_id : supplier_id, customer_id : customer_id,status:"pending"});
                    console.log(newSubscription)
                   
                    return res.status(200).json({message : `The Customer ${findCustomer.full_name} has been Successfully Invited By ${findSupplier?.full_name}`});
                }
                else
                    return res.status(404).json({message : `The Customer ${findCustomer.full_name} could not be invited`});
            }
            else
            {
                return res.status(404).json({message : `Exceeded limit`});
            }
        }
        else
        {
            return res.status(404).json({message: "Invalid customer or supplier"});
        }
 
    }catch(error){
        return res.json({message: error});
    }
}
 
export default sendInvite;