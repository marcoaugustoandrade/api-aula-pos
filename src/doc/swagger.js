import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
    version: '1'
  },
  servers: {
    url: 'http://localhost:3000/docs'
  },
  host: 'http://localhost:3000/docs',
  schemes: ['http'],
  definitions: {
    Pessoa: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64'
        },
        nome: {
          type: 'string'
        },
        email: {
          type: 'string'
        }
      }
    }
  }
}

const outputFile = './src/doc/swagger-output.json'
const endpointsFiles = ['./src/routes/index.js']

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(async () => {
  await import('../../server.js')
})
