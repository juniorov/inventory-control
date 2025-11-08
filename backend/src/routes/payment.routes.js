import { Router } from "express";
import { create, remove, show, update } from "../controllers/payment.controller.js";
import { validateIdParam, validatePayment } from "../middlewares/vadalite.middleware.js";

const router =Router();

router.post('/payments', validatePayment, create);
router.get('/payments/:id', validateIdParam, show);
router.patch('/payments/:id', validateIdParam, validatePayment, update);
router.delete('/payments/:id', validateIdParam, remove);

export default router;