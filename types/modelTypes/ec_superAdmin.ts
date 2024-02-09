import { Model } from "sequelize";

class EC_SUPERADMIN extends Model{
    public id ?:number;
    public full_name !: string;
    public e_mail !: string;
    public password !: string;
    public profile_pic !: string;
    public registration_id?:string;
    public registration_time_stamp ?: Date;
    public createdAt ?: Date;
    public updatedAt ?: Date
  
  }
  export default EC_SUPERADMIN ;