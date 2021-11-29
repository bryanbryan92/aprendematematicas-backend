import executeQuery from "../services/mysql.service";

const listar = async(req, res, next) => {
    
    try{
        const response = await executeQuery('SELECT * FROM usuariobe');
        console.log(response);
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response: null
        }
        res.json(data);
    }catch(error){
        next(error);
    }
}
const usuario = (req, res, next) => {
    const {id} = req.params;
    executeQuery(`SELECT * FROM usuariobe WHERE idusuario = ${id}`).then(//invoco el metodo previamente creado que ejecuta el query
        (response) => {//Maneja la respuesta positiva
            //listar;
            const data = {
                message: `${response.length} datos encontrados`,
                datos: response.length >0 ? response[0] : null
            }
            res.json(data);

        }).catch((error) =>{//Maneja la respuesta negativa
            next(error);//Envia el status del error al postman
        });


}
const registrar = async(req, res, next) =>{
    const {nombres,apellidos,email,contra,grado,edad,idusuario} = req.body;

    try{
        const response = await executeQuery(`INSERT INTO usuariobe (nombres,apellidos,email,contra,grado,edad,idusuario) 
        VALUES ('${nombres}','${apellidos}','${email}','${contra}','${grado}','${edad}', null)`);
        res.status(201).json({message: 'created', id: response.insertId});
        console.log(response);          
    }catch(error){
        next(error);
    }
}

const actualizarUsuario = async(req, res, next) =>{
    const {nombres,apellidos,email,contra,grado,edad,idusuario} = req.body;

    try{
        const response = await executeQuery(`UPDATE usuariobe SET nombres = '${nombres}', apellidos = '${apellidos}', 
        email = '${email}', contra = '${contra}', grado = '${grado}', edad = '${edad}' WHERE idusuario = ${req.params.id}`);

        console.log(response);    
        if(response.affectedRows > 0){
            res.json({message: 'updated'});
        }else{
            res.status(404).json({message: `No existe  registro con id: ${req.params.id}`})
        }
        
    }catch(error){
        next(error);
    }}

const eliminarUsuario = async(req, res, next) =>{
    try{
        const response = await executeQuery(`DELETE FROM usuariobe WHERE idusuario = ${req.params.id}`);
        console.log(response);    
        if(response.affectedRows > 0){
            res.json({message: 'deleted'});
        }else{
            res.status(404).json({message: `No existe  registro con id: ${req.params.id}`})
        }
    }catch(error){
        next(error);
    }
}

export {listar, usuario, registrar, actualizarUsuario, eliminarUsuario}