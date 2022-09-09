const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'UserManager',
      description: 'API para controlar usuários, grupos, unidades e rotas',
      version: '0.0.1',
      termsOfService: 'http://localhost:3000/terms',
      contact: {
        name: 'USER Manangers',
        email: 'contato@fslab.dev',
        url: 'fslab.dev'
      },
      license: {
        name: 'Lincença: MIT',
        url: 'https://www.gnu.org/licenses/gpl-3.0.html'
      }
    },
    externalDocs: {
      description: 'Documentação detalhada',
      url: 'https://docs.api.fslab.dev'
    },
    servers: [
      {
        url: 'http://localhost:3030',
        description: 'API em desenvovlvimento no FSLAB'
      },
      {
        url: 'http://localhost:3030',
        description: 'API em produução no FSLAB'
      }
    ],
    tags: [
      {
        name: 'grupos',
        description: 'Operações para rota Grupos'
      }
    ],
    paths: { }
  },
  apis: ['./src/routes/*.js']
}

export default swaggerOptions
