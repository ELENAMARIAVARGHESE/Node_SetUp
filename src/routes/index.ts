import { Router, Request, Response } from "express";
import login from "../controllers/authentication/login";
import register from "../controllers/authentication/supplierRegistration";
import middleware from '../middleware/cookies';
import cregister from "../controllers/authentication/customerRegistration";
import sub_plan from "../controllers/authentication/createSubscriptionPlan";
import verifySuperAdmin from "../middleware/verifySuperAdmin";

// import jwt from "jsonwebtoken"
// import { JsonWebTokenError } from "jsonwebtoken";
// import bcrypt from 'bcrypt';

const router = Router();

router.post("/supplierRegistration", async (req: Request, res: Response) => {
  register(req, res);
});
router.post("/customerRegistration", async (req: Request, res: Response) => {
cregister(req,res);
});
router.post("/subscriptionPlanCreation",verifySuperAdmin, async (req: Request, res: Response) => {
sub_plan(req,res);
});
router.post("/login",middleware, async (req: Request, res: Response) => {
  login(req, res);
});

export default router;
