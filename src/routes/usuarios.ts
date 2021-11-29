import {Router} from "express";
import { actualizarUsuario, registrar, eliminarUsuario, usuario, listar } from "../controllers/usuarioscontroller";
import errorHandler from "../middlewares/erros";

const usuariosRoutes = (app)=>{
    const router = Router();
    app.use('/',router);

    

    router.get('/listar', listar);
    router.get('/usuario/:id', usuario);
    router.post('/registrar', registrar);
    router.put('/actualizarUsuario/:id', actualizarUsuario);
    router.delete('/eliminarUsuario/:id', eliminarUsuario);
    
    router.use(errorHandler);

}

export default usuariosRoutes;