import mongoose from 'mongoose'

const CursoSchema = new mongoose.Schema({

  nome: {
    type: String
  },
  descricao: {
    type: String
  },
  cargaHoraria: {
    type: Number
  },
  instrutor: {
    type: String
  },
  tags: [{
    type: String
  }]
})

const Curso = mongoose.model('Curso', CursoSchema)

export default Curso
