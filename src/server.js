import express from "express"
import routerPessoas from "./routes/pessoas.js"
import connection from "./config/database.js"
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const app = express()
app.use(express.json())


// Rotas
app.use('/api', routerPessoas)

// Documentação da API
import swaggerOptions from './config/swagger.js'
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

// Tratamento da rota não encontrada
app.use((req, res) => {
  res.status(404)
  res.send({
    status: 404,
    mensagem: "Rota não encontrada, configura a documentação em http://localhost:3002/api/v1/docs"
  })
})

// Error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode)
  res.send({
    "status": statusCode,
    "message": err.message
  })
})

app.listen(3000, () => { console.log('API Started') })