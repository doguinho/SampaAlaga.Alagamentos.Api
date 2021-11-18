import "reflect-metadata";
import express from 'express';
import {createConnection} from "typeorm";
import { router } from "./src/routes";

const connection = createConnection();

const app = express();

// app.get('/teste',(req,resp)=>{
//   return resp.send('oi')
// })

app.use(express.json())
app.use(router)

app.listen(3000,() => console.log('Server is up http://localhost:3000'))