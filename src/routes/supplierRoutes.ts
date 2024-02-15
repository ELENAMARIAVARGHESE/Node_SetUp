import { Router, Request, Response } from "express";
import resetPassword from "../controllers/authentication/resetPassword";
import profile from "../controllers/supplierControllers/supplierProfile";
import middlewareJWTVerify from "../middleware/verifyJWT";
import customerProfile from "../controllers/customerControllers/customerProfile";
import sendInvite from "../controllers/supplierControllers/sendInvite";
import getSubscriptionPlan from "../controllers/customerControllers/getSubscriptionPlan";
import approveInvite from "../controllers/customerControllers/approveInvite";

const router = Router();

router.get("/supplierProfile",middlewareJWTVerify,async (req: Request, res: Response) => {
  profile(req, res);
});
router.get("/customerProfile",middlewareJWTVerify,async (req: Request, res: Response) => {
  customerProfile(req, res);
});
router.get("/subscriptionPlans",async (req: Request, res: Response) => {
  getSubscriptionPlan(req, res);
});


router.patch("/resetPassword", async (req: Request, res: Response) => {
  resetPassword(req, res);
});

router.post("/sendInvite", async (req: Request, res: Response) => {
  sendInvite(req, res);
});

router.patch("/approveInvite", async (req: Request, res: Response) => {
  approveInvite(req, res);
});


export default router;
