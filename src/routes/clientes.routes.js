import {Router} from "express";
import { methodHTTP as clientesController } from "../controllers/cliente.controlles.js";

const router = Router();

router.get("/", clientesController.getClientes);
router.post("/", clientesController.postClientes);


export default router;