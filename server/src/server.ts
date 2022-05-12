import express from 'express'
import cors from 'cors'
import { routes } from './routes'

//cada comando é enviado de forma linear


//criando nossa aplicação
const app = express();

//Um forma de fazer um controle de segurança no backend para que não permita que frontends inadequados não acessem o backend
app.use(cors());

//Ta falando que antes de processar a rota, vá na requisição e vê se tem uma requisição em JSON
app.use(express.json());

app.use(routes);


//3333 é a porta e o arrow function é a função que diz para avisar qnd estiver rodando
app.listen(3333, () => {
    console.log('HTTP server running!');
});



















// // //Abaixo é um teste e um "Easter Egg"
// // //O código questá falando, quando acessar o endpoint /easter-egg retorne um olá senhor, sendo req - request e res - response (ambos precisam estar no parametro)___http://localhost:3333/easter-egg
// app.get('/easter-egg', (req, res) => {
//     return res.send('Olá Senhor!');
// })