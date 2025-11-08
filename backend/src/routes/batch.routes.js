import { Router } from "express";
import { create, remove, show, update } from "../controllers/batch.controller.js";
import { validateBatch, validateIdParam } from "../middlewares/vadalite.middleware.js";

const router = Router();

router.post('/batches',validateBatch, create);
router.get('/batches/:id', validateIdParam, show);
router.patch('/batches/:id', validateIdParam, validateBatch, update);
router.delete('/batches/:id', validateIdParam, remove);

export default router;