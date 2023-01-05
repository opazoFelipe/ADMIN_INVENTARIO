"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var express_1 = require("express");
var config_1 = require("./database/config");
var Server = /** @class */ (function () {
    // private usuariosPath: string
    // private authPath: string
    // private apiDocsPath: string
    // private apiDocsPathJson: string
    function Server() {
        this.app = (0, express_1["default"])();
        this.port = process.env.PORT || '8000';
        // this.usuariosPath = '/api/usuarios'
        // this.authPath = '/api/auth'
        // this.apiDocsPath = '/api/docs'
        // this.apiDocsPathJson = '/api/docs.json'
        // // Middlewares
        // this.middlewares()
        // // Rutas de la app
        // this.routes()
    }
    Server.prototype.middlewares = function () {
        // CORS
        // this.app.use(cors())
        // Lectura y parseo del body
        // this.app.use(express.json())
        // // Directorio público
        // this.app.use(express.static('public'))
    };
    Server.prototype.routes = function () {
        // this.app.use(this.authPath, require('../routes/auth'))
        // this.app.use(this.usuariosPath, require('../routes/usuarios'))
        this.app.use('/*', function (req, res) { return res.status(404).json({ msg: 'Not found' }); });
    };
    Server.prototype.listen = function () {
        var _this = this;
        (0, config_1["default"])()
            .then(function (c) {
            _this.app.listen(_this.port, function () {
                console.log("Server on port ".concat(_this.port));
            });
        })["catch"](console.log);
    };
    return Server;
}());
exports["default"] = Server;
