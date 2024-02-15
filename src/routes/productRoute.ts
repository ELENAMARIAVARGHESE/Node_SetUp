import { Router, Request, Response } from "express";
import addProducts from "../controllers/products/addProducts";
const router = Router();

router.post("/addProducts", async (req: Request, res: Response) => {
    addProducts(req, res);
  });

  export default router;