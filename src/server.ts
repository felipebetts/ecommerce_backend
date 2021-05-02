import dotenv from 'dotenv' 
import express from 'express'
import 'reflect-metadata'
import './database'
dotenv.config()
import { routes } from './routes'


const app = express()

app.use(express.json())

app.use(routes)

app.listen(4000, () => {
    console.log('Servidor online na porta 4000')
})