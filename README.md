# Welcome
Este é um projeto de API de controle de usuários em NodeJS.

# Objetivo
1. Ser uma RESTful API que futuramente sera utilizada em algum projeto front-end meu.
2. Consolidar meus conhecimentos em criar APIs e CRUD.

# Tecnologias 
- NodeJS
- ExpressJS
- Sequelize
- PostgreSQL

# Instalação
1. Inicie um banco de dados e coloque as informações necessárias em um arquivo `.env` na raiz do projeto.
Template do arquivo `.env`:
``` .env
# DATABASE
DB_DIALECT="Tipo do banco"
DB_HOSTNAME="Nome do host"
DB_USERNAME="Nome do usuário"
DB_PASSWORD="Senha"
DB_DATABASE="Nome do banco"

# SERVER
PORT="Porta do server"
```

2. Instale as dependencias com o comando:
``` bash
npm install
```

3. E por fim rode o comando:
``` bash
npm start
```
para iniciar a aplicacão.

# TO-DOS
- [x] Iniciar o projeto e as pastas
- [x] Iniciar o server
- [x] Conectar com o banco

## Gerenciamento do banco
- [x] Criar o model de usuario
- [x] Criar o controller para o model de usuario

## Rotas
- [x] Criar rota de registro de usuarios
- [ ] Criar rota de login de usuarios
- [ ] Criar rota de deletar usuarios
- [ ] Criar rota de modificar certo usuario
- [ ] Criar rota para pegar as informações do usuario

