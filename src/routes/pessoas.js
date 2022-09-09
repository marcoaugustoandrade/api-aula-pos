import { Router } from "express"
import pessoasController from "../controllers/pessoas.js" 

const routerPessoas = Router()

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
routerPessoas.get('/pessoas', pessoasController.listar)
routerPessoas.get('/pessoas/:id', pessoasController.listarPorId)
routerPessoas.post('/pessoas', pessoasController.inserir)
routerPessoas.put('/pessoas/:id', pessoasController.alterar)
routerPessoas.delete('/pessoas/:id', pessoasController.deletar)

export default routerPessoas