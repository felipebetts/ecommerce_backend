import dotenv from 'dotenv' 
import express from 'express'
import 'reflect-metadata'
import './database'
import { routes } from './routes'
import cors from 'cors'


dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.listen(4000, () => {
    console.log('Servidor online na porta 4000')
})