import {Router} from "express";
import { methodHTTP as empeladosController } from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", empeladosController.getEmpleados);

export default router;