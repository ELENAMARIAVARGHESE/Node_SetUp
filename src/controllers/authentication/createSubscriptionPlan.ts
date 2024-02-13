import EC_SUBSCRIPTION_PLAN from "../../models/ec_subscriptionPlan"
import {Request,Response} from 'express';
const sub_plan =async(req:Request,res:Response):Promise<any
>=>{
try{
    const {user_name,sub_plan_id,sub_name,sub_fees,no_of_customers} = req.body;

    if (!sub_plan_id||!sub_name||!sub_fees|| !no_of_customers) {
        return res.status(422).json({ "error": "Insufficient Data" });
}
// const findSuperAdmin = await EC_SUPPLIERS.findOne({where: {full_name: user_name, registration_id : 1}});
// if(findSuperAdmin)
// {
const newPlan = await EC_SUBSCRIPTION_PLAN.create({plan_id:sub_plan_id,subscription_name:sub_name,subscription_fee:sub_fees,no_of_customers:no_of_customers },{raw:true});
return res.status(200).json({message:  `Plan Name ${newPlan.subscription_name}, subscription fee ${newPlan.subscription_fee} and customer limit is ${newPlan.no_of_customers}`})
// }
// else{
//     return res.status(422).json({ error: "Only admin can add subscription plans" });

// }

}
catch (error:any) {
    console.error('Error during login:', error);
    return res.status(500).json({ "error": "Internal Server Error" });

}
}
export default sub_plan;