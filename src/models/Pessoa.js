import mongoose from "mongoose"

const pessoaSchema = new mongoose.Schema({
  nome: { 
    type: String,
    required: true
  },
  email: { 
    type: String 
  }
})

const Pessoa = mongoose.model("Pessoa", pessoaSchema)

export default Pessoa