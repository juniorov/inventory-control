import { Router } from "express";
import { create, remove, show, update } from "../controllers/batch.controller.js";

const router = Router();

router.post('/batches', create);
router.get('/batches/:id', show);
router.patch('/batches/:id', update);
router.delete('/batches/:id', remove);

export default router;