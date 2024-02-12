import EC_SUPPLIERS from "../../models/ec_suppliers";
import { Request, Response } from "express";
const profile = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userType, registration_id } = req.query;

    if (!registration_id || !userType) {
      return res.status(422).json({error: "Insufficient Data" });
    }
    // if(userType==="supplier"){
    const user = await EC_SUPPLIERS.findOne({
      where: {
        registration_id: registration_id,
      },
    });
console.log(user);
    res
      .status(200)
      .json({
        full_name: `${user?.full_name}`,
        email: `${user?.e_mail}`,
        profile_pic: `${user?.profile_pic}`,
        registration_id: `${user?.registration_id}`,
        registration_time_stamp: `${user?.registration_time_stamp}`,
      });
    //}
  } catch (error: any) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default profile;
