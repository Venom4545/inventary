import getConnection from "./../db/database.js"

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT Apellido, Nombre, Titulo FROM empleados");
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getEmpleados
}   
