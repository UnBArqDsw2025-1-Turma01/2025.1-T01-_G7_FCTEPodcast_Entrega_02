# FTCEPodcast 🎙️

<p align="center">
  <img src="https://github.com/user-attachments/assets/916215eb-3ed2-4803-a1c6-0ac4151ba929" alt="FCTE Podcast" width="300"/>
</p>

## 📖 Introdução

Este projeto tem como objetivo o desenvolvimento de uma plataforma web voltada à organização, ao acesso e à disseminação de conteúdos educacionais em formato de podcast. A proposta busca facilitar o compartilhamento de conhecimento no ambiente acadêmico da FCTE, promovendo uma forma acessível e dinâmica de aprendizado por meio do áudio.

 <h2 align="left">
    Acesse o site clicando 
     <a href="https://fctepodcast.site/login">aqui
     </a>
   </h2>

## 📚 Para Rodar a Documentação

Para visualizar a documentação do projeto localmente, utilizamos o **Docsify**, uma ferramenta leve e prática para gerar documentações interativas diretamente a partir de arquivos Markdown.

---

### ✅ Passos para execução

1. Instale o Docsify globalmente com o seguinte comando:

```bash
npm i docsify-cli -g
```

2. Para iniciar o servidor local e visualizar a documentação, execute:

```bash
docsify serve ./docs
```

Isso iniciará um servidor local geralmente em `http://localhost:3000`, onde você poderá acessar a documentação de forma interativa.


## 🚀 Para Rodar as Telas Iniciais do Projeto

A seguir estão os passos para rodar as telas iniciais do projeto **FCTEPodcast** em ambiente de desenvolvimento.

---

### ✅ Pré-requisitos

- 🐳 **Docker Compose** (ou `docker-compose`)
- ✉️ **Conta no [Resend](https://resend.com/)** (para envio de e-mails)

---

### 🌱 Etapas iniciais

1. Acesse a branch `feat--cadastro-de-usuarios`:

```bash
git checkout feat--cadastro-de-usuarios
```

2. Navegue até a pasta principal do projeto:

```bash
cd FCTEPodcast
```

3. Crie um arquivo `.env` na mesma pasta onde está localizado o `docker-compose.dev.yaml` e adicione as seguintes variáveis de ambiente:

```env
# API CONFIG
API_PORT=3007
RESEND_API_KEY=
MONGO_URL=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@db:27017/
FRONTEND_URL=http://localhost:5173

# DB CONFIG
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=admin123
MONGO_INITDB_DATABASE=fctepodcast

# JWT CONFIG
JWT_SECRET=your_jwt_secret

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# FRONTEND
VITE_API_URL=http://localhost:${API_PORT}
```

---

### 🧱 Executando o projeto

Depois de configurar o `.env`, execute o comando abaixo para subir os containers em modo desenvolvimento:

```bash
docker compose -f docker-compose.dev.yaml up -d --build
```

ou, dependendo da versão do Docker Compose:

```bash
docker-compose -f docker-compose.dev.yaml up -d --build
```

---

### ✅ Pronto!

Após a execução, o sistema estará disponível nas portas definidas. Verifique se o frontend está acessível em:
🔗 `http://localhost:5173`
E a API em:
🔗 `http://localhost:3007`


