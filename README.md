## ToDo
- [x] Instalar ferramentas: VSCode, node (com nvm), Docker, docker-compose
- [x] Inicializar o projeto Node
- [x] Instalar pacotes express e mongoose
- [x] Subir o servidor com nodemon + rota com array de dados
- [x] Subir o MongoDB com docker-compose
- [x] EditorConfig
- [x] Criar model Curso
- [x] Configurar o mongoose e env
- [x] Criar controller curso
- [x] Criar rota para listar cursos + seeds
- [x] Criar rota para listar curso por id
- [x] Configurar documentação
- [ ] Documentar rotas de listagem
- [x] Implementar logs (Morgan)
- [x] Paginar listagem de cursos
- [x] Centralizar importação das rotas
- [x] Criar rota para cadastrar curso + validação de dados
- [ ] Documentar rota de cadastro
- [x] Handle erros
- [ ] Handle validação de dados
- [x] Criar rota para atualizar curso
- [ ] Documentar rota de atualização de curso
- [x] Criar rota para deletar curso
- [ ] Documentar rota de exclusão de curso
- [ ] Filtrar listagem de cursos
- [x] ESLint + Prettier
- [x] Rota 404
- [ ] Autenticação com JWT + CRUD usuários + documentação de rotas
- [x] Ativar CORS


## Criando o arquivo de configuração do ESLint
Instalando o ESLint globalmente
```
npm install -g eslint
```

Criando o arquivo de configuração no projeto
```
npx eslint --init
```

No `package.json`:
```
"scripts": {
  "lint": "eslint 'src/**/*.js'",
  "lint:fix": "eslint --fix 'src/**/*.js'",
}
```


