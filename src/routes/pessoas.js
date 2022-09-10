import { Router } from 'express'
import pessoasController from '../controllers/pessoas.js'

const pessoasRouter = Router()

pessoasRouter.get('/api/pessoas', pessoasController.listar)
pessoasRouter.get('/api/pessoas/pagina/:pagina', pessoasController.listarPaginado)
pessoasRouter.get('/api/pessoas/:id', pessoasController.listarPorId)
pessoasRouter.post('/api/pessoas', pessoasController.inserir)
pessoasRouter.put('/api/pessoas/:id', pessoasController.alterar)
pessoasRouter.delete('/api/pessoas/:id', pessoasController.deletar)

export default pessoasRouter
