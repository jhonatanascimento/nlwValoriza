import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

//@types/express -D
const app = express();

app.use(express.json());

app.use(router);


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if(err instanceof Error){

        return response.status(400).json({
            error: err.message
        })

    }

    return response.status(500).json({
        status:"error",
        message:"internal Server Error"
    })

})

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
app.listen(3000, () => console.log("Server is running"));
