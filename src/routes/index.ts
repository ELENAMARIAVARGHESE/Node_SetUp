import { Router, Request, Response } from "express";
import login from "../controllers/authentication/login";
import register from "../controllers/authentication/registration";
// import jwt from "jsonwebtoken"
// import { JsonWebTokenError } from "jsonwebtoken";
// import bcrypt from 'bcrypt';

const router = Router();

router.post("/registration", async (req: Request, res: Response) => {
  register(req, res);
});

router.post("/login", async (req: Request, res: Response) => {
  login(req, res);
});

export default router;
