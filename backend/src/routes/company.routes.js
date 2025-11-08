import { Router } from "express";
import { create, update, remove, show } from "../controllers/company.controller.js";
import { validateCompany, validateIdParam, validateUser } from "../middlewares/vadalite.middleware.js";

const router = Router();

router.post('/company', validateCompany, validateUser, create);
router.patch('/company/:id', validateIdParam, validateCompany, update);
router.delete('/company/:id', validateIdParam, remove);
router.get('/company/:id', validateIdParam, validateCompany, show);


export default router;