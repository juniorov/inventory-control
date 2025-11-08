import { Router } from "express";
import { create, remove, show, update } from "../controllers/product.controller.js";
import { validateIdParam, validateProduct } from "../middlewares/vadalite.middleware.js";

const router =Router();

router.post('/product', validateProduct, create);
router.get('/product/:id', validateIdParam, show);
router.patch('/product/:id', validateIdParam, validateProduct, update);
router.delete('/product/:id', validateIdParam, remove);

export default router;