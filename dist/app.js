"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const config_1 = __importDefault(require("./config/config"));
const erros_1 = __importDefault(require("./middlewares/erros"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
(0, usuarios_1.default)(app);
app.use(erros_1.default);
app.listen(config_1.default.PORT, () => {
    return console.log(`servidor corriendo sobre el puerto ${config_1.default.PORT}`);
});
//# sourceMappingURL=app.js.map