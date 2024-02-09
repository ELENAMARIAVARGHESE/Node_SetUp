import { Router, Request, Response } from "express";
import resetPassword from "../controllers/authentication/resetPassword";
import profile from "../controllers/supplierControllers/profile";

const router = Router();

router.get("/profile", async (req: Request, res: Response) => {
  profile(req, res);
});

router.patch("/resetPassword", async (req: Request, res: Response) => {
  resetPassword(req, res);
});

export default router;
