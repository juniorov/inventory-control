import { Router } from "express";
import { create, update, remove, show } from "../controllers/company.controller.js";
import { validateCompany, validateCompanyIdParam, validateUser } from "../middlewares/vadalite.middleware.js";

const router = Router();

router.post('/company', validateCompany, validateUser, create);
router.patch('/company/:id', validateCompanyIdParam, validateCompany, update);
router.delete('/company/:id', validateCompanyIdParam, remove);
router.get('/company/:id', validateCompanyIdParam, validateCompany, show);


export default router;