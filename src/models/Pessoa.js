import mongoose from 'mongoose'

const pessoaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório']
  },
  email: {
    type: String
  }
}, { strict: false })

const Pessoa = mongoose.model('Pessoa', pessoaSchema)

export default Pessoa
