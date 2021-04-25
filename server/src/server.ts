//rota:endereço completo
//recurso: qual a entidade estamos acessando

//get:buscar uma ou mais informaçoes do back
//post: criar uma nova informaçao no back
//put:atualizar uma informaçao existente
//delete: remover uma info

//request Param: parametros que vem na propria rota que identificam um recurso
//query Param: parametros que vem na propria rota geralmentes opcionais para filtros...
//Request Body: parametros para a criaçao/atualizaçao de info
//knex('users').where('name','diego').select('*')

import express from 'express';
import cors from 'cors';
import path from  'path';
import routes from './routes';
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));//percorrendo o caminho até a pasta

app.listen(3333);