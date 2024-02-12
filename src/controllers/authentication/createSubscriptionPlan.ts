import EC_SUBSCRIPTION_PLAN from "../../models/ec_subscriptionPlan"
import {Request,Response} from 'express';
const sub_plan =async(req:Request,res:Response):Promise<any
>=>{
try{
    const {sub_name,sub_fees,no_of_customers} = req.body;

    if (!sub_name||!sub_fees|| !no_of_customers) {
        return res.status(422).json({ "error": "Insufficient Data" });
}
const newUser = await EC_SUBSCRIPTION_PLAN.create({subscription_name:sub_name,subscription_fee:sub_fees,no_of_customers:no_of_customers },{raw:true});


}
catch (error:any) {
    console.error('Error during login:', error);
    return res.status(500).json({ "error": "Internal Server Error" });

}
}
export default sub_plan;