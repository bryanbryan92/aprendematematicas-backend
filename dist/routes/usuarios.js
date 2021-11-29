"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioscontroller_1 = require("../controllers/usuarioscontroller");
const erros_1 = __importDefault(require("../middlewares/erros"));
const usuariosRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/listar', usuarioscontroller_1.listar);
    router.get('/usuario/:id', usuarioscontroller_1.usuario);
    router.post('/registrar', usuarioscontroller_1.registrar);
    router.put('/actualizarUsuario/:id', usuarioscontroller_1.actualizarUsuario);
    router.delete('/eliminarUsuario/:id', usuarioscontroller_1.eliminarUsuario);
    router.use(erros_1.default);
};
exports.default = usuariosRoutes;
//# sourceMappingURL=usuarios.js.map