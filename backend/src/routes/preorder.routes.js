import { Router } from "express";
import { validateIdParam, validatePreOrder } from "../middlewares/validate.middleware.js";
import { create, remove, show, update } from "../controllers/preorder.controller.js";

const router = Router();

router.post('/preorders', validatePreOrder, create);
router.get('/preorders/:id', validateIdParam, show);
router.patch('/preorders/:id', validateIdParam, validatePreOrder, update);
router.delete('/preorders/:id', validateIdParam, remove);

export default router;