# FTCEPodcast 🎙️

**Código da Disciplina**: FGA0208<br>
**Número do Grupo**: 07<br>
**Entrega**: 01<br>

## Alunos

| Foto                                                              | Matrícula     | Aluno                             |
|-------------------------------------------------------------------|---------------|-----------------------------------|
| <img src="https://avatars.githubusercontent.com/u/101185927?v=4" height="70"> | 211061814    | Gustavo Costa                     |
| <img src="https://avatars.githubusercontent.com/u/101184511?v=4" height="70"> | 211061832    | Harleny Angéllica                 |
| <img src="https://avatars.githubusercontent.com/u/101422838?v=4" height="70"> | 211062947    | Iderlan Junio Cardoso da Silva    |
| <img src="https://avatars.githubusercontent.com/u/144747380?v=4" height="70"> | 221035040    | Marcella Sousa Anderle            |
| <img src="https://avatars.githubusercontent.com/u/137426012?v=4" height="70"> | 221037975    | Natália Rodrigues de Morais       |
| <img src="https://avatars.githubusercontent.com/u/43494763?v=4" height="70"> | 200024787    | Mateus de Siqueira Silva          |
| <img src="https://avatars.githubusercontent.com/u/79025349?v=4" height="70"> | 190044128    | Rafael Kenji Taira                |
| <img src="https://avatars.githubusercontent.com/u/70647018?v=4" height="70"> | 202023805    | Joao Paulo Barros de Cristo       |
| <img src="https://avatars.githubusercontent.com/u/155927112?v=4" height="70"> | 211063176    | Joyce Dionizio                    |

## Sobre 

O FTCEPodcast é uma plataforma digital voltada à comunidade da FCTE, com o objetivo de promover a difusão de conhecimento por meio de podcasts educacionais. Disponível em versão web, o software permite a publicação e o acesso a conteúdos produzidos por docentes, monitores e convidados, abordando tópicos relevantes de diferentes disciplinas. A ferramenta visa fortalecer a aprendizagem colaborativa, incentivar o protagonismo acadêmico e facilitar o compartilhamento de saberes dentro e fora do ambiente institucional.

## Screenshots da Primeira Entrega
Adicione 2 ou mais screenshots em termos de artefatos realizados na entrega.

## Há algo a ser executado?

( X ) SIM

( ) NÃO


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



## Informações Complementares 
Quaisquer outras informações adicionais podem ser descritas nessa seção.


#### Histórico de versões 

| Versão |    Data    |        Descrição         |    Autor(es)    |  Revisor(es)     |  Detalhes da Revisão  |  
| :----: | :--------: | :----------------------: | :-------------: | :----------------| :---------------------|
|  1.0   | 06/05/2025 |   Criação do documento   | Gustavo Costa | Harleny Angéllica  | Versionamento revisado, e adicionado fotos dos participantes|