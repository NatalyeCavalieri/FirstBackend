<h1 align= "center">RocketNotes Backend</h1>

Bem-vindo ao backend do RocketNotes - Sua aplicação de notas incrível!

 > Status: developing 🚧

## Visão Geral do Projeto

O backend do RocketNotes é responsável por gerenciar o armazenamento, autenticação e manipulação de dados relacionados às notas do usuário.

## Estrutura de Diretórios

- **src/controllers**: Controladores para manipulação de dados (Notes, Tags, Sessions, User Avatar, User).
- **src/database**: Configurações e scripts relacionados ao banco de dados (Knex e SQLite).
- **src/configs, src/middleware, src/providers, src/routes, src/utils**: Diversas configurações e utilidades para o projeto.
- **src/uploads**: Local para o armazenamento de uploads (user avatars, por exemplo).
- **src/tmp**: Pasta temporária para armazenar arquivos temporários.

## Tecnologias Utilizadas

- **Express**: Framework web para Node.js.
- **Knex**: Construtor de consultas SQL.
- **SQLite e SQLite3**: Banco de dados utilizado para armazenamento local.
- **Axios, Bcryptjs, Cors, Jsonwebtoken, Multer**: Pacotes para diversas funcionalidades (requisições HTTP, criptografia, controle de CORS, autenticação, manipulação de arquivos).


## API Endpoints

- **/api/signin**: Rota para autenticação do usuário.
- **/api/signup**: Rota para registro do usuário.
- **/api/notes**: Rota para manipulação de notas.
- **/api/tags**: Rota para manipulação de tags.
- **/api/profile/avatar**: Rota para manipulação de avatares de usuário.
- **/api/profile**: Rota para informações do perfil do usuário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto é licenciado sob a Licença ISC. Consulte o arquivo LICENSE.md para obter mais detalhes.

