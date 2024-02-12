import { Router, Request, Response } from "express";
import resetPassword from "../controllers/authentication/resetPassword";
import profile from "../controllers/supplierControllers/supplierProfile";
import middlewareJWTVerify from "../middleware/verifyJWT";
import customerProfile from "../controllers/customerControllers/customerProfile";
import sendInvite from "../controllers/supplierControllers/sendInvite";

const router = Router();

router.get("/supplierProfile",middlewareJWTVerify,async (req: Request, res: Response) => {
  profile(req, res);
});
router.get("/customerProfile",middlewareJWTVerify,async (req: Request, res: Response) => {
  customerProfile(req, res);
});

router.patch("/resetPassword", async (req: Request, res: Response) => {
  resetPassword(req, res);
});
router.patch("/sendInvite", async (req: Request, res: Response) => {
  sendInvite(req, res);
});

export default router;
