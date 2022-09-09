import Pessoa from "../models/Pessoa.js"

const listar = async (req, res) => {
  
  try {
    await Pessoa.find().then(result => {
      res.status(200)
      res.send(result)
    }) 
  } catch (erro) {
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}


const listarPorId = async (req, res) => {

  const id = req.params.id

  try {
    await Pessoa.findById(id).then(result => {
      res.status(200)
      res.send(result)
    }) 
  } catch (erro) {
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}


const inserir = (req, res) => {

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
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}


const alterar = async (req, res) => { 
  
  const id = req.params.id
  const tarefaAtualizada = {
    nome: req.body.nome,
    email: req.body.email
  }

  try {
    await Pessoa.findByIdAndUpdate(id, tarefaAtualizada).then(result => {
      Pessoa.findById(id).then(result => {
        res.status(200)
        res.send(result)
      })
    }) 
  } catch (erro) {
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}


const deletar = async (req, res) => {
  
  const id = req.params.id

  try {
    await Pessoa.findByIdAndDelete(id).then(result => {
      res.status(200)
      res.send(result)
    }) 
  } catch (erro) {
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}


const pessoasController = {
  listar,
  listarPorId,
  inserir,
  alterar,
  deletar
}

export default pessoasController