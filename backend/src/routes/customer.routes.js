import { Router } from "express";
import { create, remove, show, update } from "../controllers/customer.controller.js";
import { validateCustomer, validateIdParam } from "../middlewares/vadalite.middleware.js";

const router = Router();

router.post('/customers', validateCustomer, create);
router.get('/customers/:id', validateIdParam, show);
router.patch('/customers/:id', validateCustomer, update);
router.delete('/customers/:id', validateIdParam, remove);

export default router;