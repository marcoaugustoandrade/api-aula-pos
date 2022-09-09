import { Router } from 'express'
import pessoasController from '../controllers/pessoas.js'

const pessoasRouter = Router()

/**
 * @swagger
 * paths:
 *  /pessoas:
 *    get:
 *      tags:
 *      - grupos
 *      responses:
 *        200:
 *          description: Successo
 *          content:
 *            application/json:
 *              schema:
 *                grupo:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                    nome:
 *                      type: string
 *                    descricao:
 *                      type: string
 *        404:
 *          description: Nenhum grupo encontrado
 *          content:
 *            application/json:
 *               example: Not Found
*/

pessoasRouter.get('/api/pessoas', pessoasController.listar)
pessoasRouter.get('/api/pessoas/pagina/:pagina', pessoasController.listarPaginado)
pessoasRouter.get('/api/pessoas/:id', pessoasController.listarPorId)
pessoasRouter.post('api//pessoas', pessoasController.inserir)
pessoasRouter.put('/api/pessoas/:id', pessoasController.alterar)
pessoasRouter.delete('/api/pessoas/:id', pessoasController.deletar)

export default pessoasRouter
