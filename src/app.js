/* Importamos al framework express */
import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js"
import empeladosRoutes from "./routes/empleados.routes.js"
import clientesRoutes from "./routes/clientes.routes.js"
import productosRoutes from "./routes/productos.routes.js"

/* asignamos a app toda funcinalidad para mi server web */
const app = express();

/* setear un puerto a mi web server */
app.set("port",5000)

app.use(express.json());
app.use(cors());
/* routes */
app.use("/api/categorias",categoriaRoutes)
app.use("/api/empleados",empeladosRoutes)
app.use("/api/clientes",clientesRoutes)
app.use("/api/productos",productosRoutes)

/* hacemos disponible a mi server app para toda la aplicacion */
export default app;