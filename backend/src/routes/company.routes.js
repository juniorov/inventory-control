import { Router } from "express";
import { create, update, remove, show } from "../controllers/company.controller.js";
import { validateCompany, validateIdParam, validateUser } from "../middlewares/validate.middleware.js";

const router = Router();

router.post('/companies', validateCompany, validateUser, create);
router.patch('/companies/:id', validateIdParam, validateCompany, update);
router.delete('/companies/:id', validateIdParam, remove);
router.get('/companies/:id', validateIdParam, validateCompany, show);


export default router;