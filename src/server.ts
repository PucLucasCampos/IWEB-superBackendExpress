import express from "express";
import { Router, Request, Response} from 'express';

const backend = express();
const route = Router();
const port = 3000;

backend.use(express.json());

// ROTAS DE SERVIÇOS
///loginAdm/:email/:senha
backend.post('/loginAdm', (req: Request, res: Response) => {
  // Se chegaram parametros e existe o parametro email e senha
  // req.params !== undefined && req.params.email !== undefined && req.params.senha !== undefined
  const email = req.get('email');
  const senha = req.get('senha');
  if (email && senha) {
    if (email === "admin@admin.com" && senha === "123"){
      res.send({msg: 'Olá Administrador'});
    }else {
      res.send({msg: 'Você não é o Administrador'})
    }
  }else {
    res.send('Faltando parametros na requisição')
  }
});

backend.put('/singUp', (req, res) => {
    res.send('Cadastro Funcionando');
})

backend.get('/', (req, res) => {
  res.send('Funcionando!');
})

// FIM DA ROTAS

// Subindo servidor...
backend.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});