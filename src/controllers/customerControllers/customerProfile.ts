import EC_CUSTOMERS from "../../models/ec_customer";
import { Request, Response } from "express";
const customerProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userType, userID } = req.query;

    if (!userID || !userType) {
      return res.status(422).json({ error: "Insufficient Data" });
    }
    
    const user = await EC_CUSTOMERS.findOne({
      where: {
        id: userID,
      },
    });
console.log(user);
    res
      .status(200)
      .json({
        full_name: `${user?.full_name}`,
        email: `${user?.e_mail}`,
        profile_pic: `${user?.profile_pic}`,
        invitee:`${user?.invitee}`,      });
  
  } catch (error: any) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default customerProfile;
