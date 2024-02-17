import { Router, Request, Response } from "express";
import addProducts from "../controllers/products/addProducts";
import getProducts from "../controllers/products/getProducts";
import filterProducts from "../controllers/products/filterProducts";
const router = Router();

router.post("/addProducts", async (req: Request, res: Response) => {
    addProducts(req, res);
  });
  router.get("/getProducts", async (req: Request, res: Response) => {
    getProducts(req, res);
  });
  router.get("/filterProducts", async (req: Request, res: Response) => {
    filterProducts(req, res);
  });
  export default router;