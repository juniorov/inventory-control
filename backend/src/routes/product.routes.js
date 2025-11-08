import { Router } from "express";
import { create, remove, show, update } from "../controllers/product.controller.js";
import { validateIdParam, validateProduct } from "../middlewares/vadalite.middleware.js";

const router =Router();

router.post('/products', validateProduct, create);
router.get('/products/:id', validateIdParam, show);
router.patch('/products/:id', validateIdParam, validateProduct, update);
router.delete('/products/:id', validateIdParam, remove);

export default router;