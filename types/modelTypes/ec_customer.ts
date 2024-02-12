import { Model } from "sequelize";

class EC_CUSTOMERS extends Model{
    public id ?:number;
    public full_name !: string;
    public e_mail !: string;
    public password !: string;
    public invitee !: number;
    public profile_pic !: string;
    public createdAt ?: Date;
    public updatedAt ?: Date
  
  }
  export default EC_CUSTOMERS ;