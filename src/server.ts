import "reflect-metadata";
import express from "express";

import "./database";

//@types/express -D
const app = express();

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

app.get("/test", (req, res) => {
  //Request - tudo que está entrando
  //response - tudo que está saindo
  return res.send("Olá NLW");
});

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
