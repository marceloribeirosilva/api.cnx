<p align="center">
  <a href="" rel="noopener">
  <img width=150px height=150px src="https://image.flaticon.com/icons/svg/3043/3043698.svg" alt="Backend em NodeJS - CNX">
  </a>
</p>

<h3 align="center">Backend em NodeJS - CNX</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/marceloribeirosilva/api.cnx">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/marceloribeirosilva/api.cnx">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marceloribeirosilva/api.cnx">

</div>

---

<p align="center"> Projeto construído em Node.js e Typescript.
   <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Deploy](#deploy)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Autor](#authors)

## 👀 Sobre <a name = "about"></a>

API para registrar usuários e recomendar playlists de músicas se baseando na temperatura atual da cidade natal do usuário.

Criado se baseando nos seguintes requisitos:

[ x ] A api precisa registrar os seguintes campos do usuário: (Nome, E-mail, Senha, Notas Pessoais, Cidade Natal).

[ x ] Notas pessoais e senha não devem estar visíveis no banco de dados.

[ x ] A rota de autenticação deve funcionar com o método JWT.

[ x ] A api deve fornecer um mecanismo de redefinição e esquecimento de senha.

[ x ] Criar um log de todos os requests para uma futura auditoria.

[ x ] Com base na cidade natal e na temperatura atual, é necessário recomendar a lista de reprodução, como segue: i) se a temperatura (celcius) estiver acima de 30 graus, sugerir faixas para a festa (party); ii) caso a temperatura esteja entre 15 e 30 graus, sugira faixas de música pop; iii) Se estiver um pouco frio (entre 10 e 14 graus), sugira faixas de música rock. iv) Caso contrário, se estiver frio lá fora, sugere faixas de música clássica (classical).

**`Observação:`** Este projeto utiliza das apis externas Spotify para a sugestão das playlists e OpenWeather para pegar a temperatura atual da cidade natal.

## 🏁 Iniciando <a name = "getting_started"></a>

### Rotas da Aplicação

- **`POST /users`**: Rota para cadastrar usuários. O corpo da requisição deve conter os seguintes campos: name; email; password; personal_notes; hometown. O response da requisição traz o cadastro realizado com todos os campos, incluindo o id gerado.

- **`POST /sessions`**: Rota para criar a sessão do usuário. O corpo da requisição deve conter os seguintes campos: email; password. O response da requisição traz todos os dados do usuário e o token JWT que tem validade de 2 horas.

- **`GET /playlists`**: Rota para sugerir as playlists de acordo com a temperatura da cidade natal do usuário. Essa requisição não precisa ter um corpo, porém, é necessário incluir uma autenticação do tipo Bearer (Token). **`Observação:`** É através do token que a api sabe qual é a cidade natal do usuário (Payload).

- **`POST /password/forgot`**: Rota com o mecanismo de 'esqueci minha senha'. O corpo da requisição deve conter o seguinte campo: email.

- **`POST /password/reset`**: Rota para resetar a senha do usuário. O corpo da requisição deve conter os seguintes campos: password (o novo password escolhido pelo usuário), token (esse token é obtido pelo mecanismo /password/forgot).

## 🚀 Deploy<a name = "deploy"></a>

Você pode utilizar a API, está aqui: `https://api-cnx.herokuapp.com`

### Instalação e execução local

Criar um fork do github

Executar na raiz do projeto o seguinte comando para instalar as dependências `yarn install` ou `npm install`

Ter o Postgres instalado localmente ou uma imagem docker sendo executada.

Configurar os dados de acesso ao banco local no arquivo `ormconfig.json` e criar o database postgres.

Configurar as variáveis de ambiente no arquivo `.env.example` que está na raiz do projeto.

Renomear o arquivo `.env.example` para `.env`

## 🎈 Uso <a name="usage"></a>

```sh
yarn dev:server
```

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/#/)
- [Postgress](https://www.postgresql.org/)

### Bibliotecas/Frameworks principais

- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)

## ✍️ Autor <a name = "authors"></a>

**Marcelo Silva**

- Github: [@marceloribeirosilva](https://github.com/marceloribeirosilva)
- LinkedIn: [@marcelors](https://www.linkedin.com/in/marcelors/)
