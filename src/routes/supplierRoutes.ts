import { Router, Request, Response } from "express";
import resetPassword from "../controllers/authentication/resetPassword";
import profile from "../controllers/supplierControllers/profile";
import middlewareJWTVerify from "../middleware/verifyJWT";

const router = Router();

router.get("/profile",middlewareJWTVerify,async (req: Request, res: Response) => {
  profile(req, res);
});

router.patch("/resetPassword", async (req: Request, res: Response) => {
  resetPassword(req, res);
});

export default router;
