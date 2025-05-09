import getConnection from "./../db/database.js"
const getProductos = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT ProductoID,ProductoNombre,PrecioUnitario FROM productos")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}
const updateProductos = async (req, res) =>{
    try {

        const {id} = req.params
        const {ProductoNombre,PrecioUnitario} = req.body;

        const product = {ProductoNombre,PrecioUnitario}
        
        const connection = await getConnection();

        const result = await connection.query("Update productos SET ? WHERE ProductoID = ? ", [product, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getProductos,
    updateProductos
}   
