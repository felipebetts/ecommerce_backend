import dotenv from 'dotenv' 
import express from 'express'
import 'reflect-metadata'
import './database'
import { routes } from './routes'


dotenv.config()

const app = express()

app.use(express.json())

app.use(routes)

app.listen(4000, () => {
    console.log('Servidor online na porta 4000')
})