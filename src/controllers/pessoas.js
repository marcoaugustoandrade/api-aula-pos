import Pessoa from '../models/Pessoa.js'

const listar = async (req, res, next) => {
  try {
    await Pessoa.find().then(result => {
      res.status(200)
      res.send(result)
    })
  } catch (erro) {
    next(erro)
  }
  // } catch (erro) {
  //   res.status(500)
  //   res.send({ mensagem: erro.message })
  // }
}

const listarPaginado = async (req, res, next) => {
  const pagina = req.params.pagina
  const limite = 2
  const documentosPulados = limite * (pagina - 1)

  try {
    const pessoas = await Pessoa.find()
      .limit(limite * 1)
      .skip(documentosPulados)
      .exec()

    const totalPaginas = await Pessoa.countDocuments()

    res.status(200)
    res.send({
      total_paginas: Math.ceil(totalPaginas / limite),
      pagina_atual: pagina,
      pessoas
    })
  } catch (erro) {
    next(erro)
  }
}

const listarPorId = async (req, res, next) => {
  const id = req.params.id

  try {
    await Pessoa.findById(id).then(result => {
      res.status(200)
      res.send(result)
    })
  } catch (erro) {
    next(erro)
  }
}

const inserir = (req, res, next) => {
  try {
    const pessoa = new Pessoa({
      nome: req.body.nome,
      email: req.body.email
    })

    pessoa.save(result => {
      res.status(201)
      res.send(result)
    })
  } catch (erro) {
    next(erro)
  }
}

const alterar = async (req, res, next) => {
  const id = req.params.id
  const tarefaAtualizada = {
    nome: req.body.nome,
    email: req.body.email
  }

  try {
    await Pessoa.findByIdAndUpdate(id, tarefaAtualizada).then(() => {
      Pessoa.findById(id).then(result => {
        res.status(200)
        res.send(result)
      })
    })
  } catch (erro) {
    next(erro)
  }
}

const deletar = async (req, res, next) => {
  const id = req.params.id

  try {
    await Pessoa.findByIdAndDelete(id).then(result => {
      res.status(200)
      res.send(result)
    })
  } catch (erro) {
    next(erro)
  }
}

const pessoasController = {
  listar,
  listarPaginado,
  listarPorId,
  inserir,
  alterar,
  deletar
}

export default pessoasController
