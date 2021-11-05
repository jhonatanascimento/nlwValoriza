"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("./database");
//@types/express -D
var app = (0, express_1.default)();
// Methods mais comuns:
// GET - buscar uma informação
// POST - enviar uma informação, inserir no banco
// Put- alterar uma informação enviada por post
// Delete- remover informação
// Patch- alterar uma informação especifica
/**
 * Tipos de parametros
 * Routes Params=> http://localhost:3000/produtos/ são parametros usados nas rotas
 * Querie Params => São parametros passados na rota que filtram "/produtos?name=teclado&description=..."
 *
 * Body Params=>Parametros que vem no corpo da requisição, "name :teclado", usa no POST
 */
//http://localhost:3000
app.listen(3000, function () { return console.log("Server is running"); });
