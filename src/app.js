import express from 'express'
// import pessoasRouter from "./routes/pessoas.js"
import connection from './config/database.js'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './doc/swagger-output.json' assert { type: 'json' }
import morgan from 'morgan'
import fs from 'fs'
import cors from 'cors'
import routes from './routes/index.js'
import { type } from 'os'

const app = express()
app.use(express.json())

// Cors
// TODO: limitar operações por domínio
app.use(cors())

// Logs
const accessLogStream = fs.createWriteStream('access.log', { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

// Database connection
connection
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Rotas
// app.use('/api', pessoasRouter)
routes(app)

// Documentação da API
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// Tratamento da rota não encontrada
app.use((req, res) => {
  res.status(404)
  res.send({
    status: 404,
    mensagem: 'Rota não encontrada!'
  })
})

// Error handling
app.use((err, req, res) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode)
  res.send({
    status: statusCode,
    message: err.message
  })
})

export default app
