import express, { response } from "express";


//@types/express -D
const app = express();

// Methods mais comuns:
// GET - buscar uma informação
// POST - enviar uma informação, inserir no banco
// Put- alterar uma informação enviada por post
// Delete- remover informação  
// Patch- alterar uma informação especifica





app.get("/test", (req, res) => {
   //Request - tudo que está entrando
   //response - tudo que está saindo
   return res.send("Olá NLW"); 
})

app.post("/test-post", (req,res) => {
   return res.send("Olá nlw metodo post")
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));