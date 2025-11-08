import { Router } from "express";
import { create, remove, show, update } from "../controllers/customer.controller.js";
import { validateCustomer, validateIdParam } from "../middlewares/vadalite.middleware.js";

const router = Router();

router.post('/customer', validateCustomer, create);
router.get('/customer/:id', validateIdParam, show);
router.patch('/customer/:id', validateCustomer, update);
router.delete('/customer/:id', validateIdParam, remove);

export default router;