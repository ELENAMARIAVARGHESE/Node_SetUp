import EC_SUBSCRIPTION_PLAN from "../../models/ec_subscriptionPlan";
import { Request, Response } from "express";
const getSubscriptionPlan = async (req: Request, res: Response): Promise<any> => {
  try {
   const plan = await EC_SUBSCRIPTION_PLAN.findAll();
   res.status(200).json({message:plan});

  } catch (error: any) {
    console.error("Error during login:", error);
    res.status(500).json({error: "Internal Server Error" });
  }
};
export default getSubscriptionPlan;
