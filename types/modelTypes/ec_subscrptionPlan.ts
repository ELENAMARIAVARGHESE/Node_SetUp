import { Model } from "sequelize";

class EC_SUBSCRIPTION_PLAN extends Model{
    public plan_id ?:number;
    public subscription_name !: string;
    public subscription_fee !: number;
    public no_of_customers !:number;
    public createdAt ?: Date;
    public updatedAt ?: Date
  
  }
  export default EC_SUBSCRIPTION_PLAN ;