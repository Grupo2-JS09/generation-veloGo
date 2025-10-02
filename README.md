<img width="1536" height="1024" alt="ChatGPT Image 2 de out  de 2025, 11_41_37" src="https://github.com/user-attachments/assets/4f4bd2b1-3c95-47f2-8b58-6780e49461dc" />

# 🚗 VeloGo

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## 📋 Sobre o Projeto

VeloGo é uma aplicação de serviço de carona compartilhada, similar ao Uber, desenvolvida como projeto da Generation Brasil. O sistema permite que usuários solicitem corridas, calculando automaticamente o preço e tempo estimado baseado na distância e categoria do veículo escolhido.

## ✨ Funcionalidades

- 🔐 **Autenticação de Usuários** - Sistema de login e registro com JWT
- 👤 **Gerenciamento de Usuários** - CRUD completo de usuários
- 🚙 **Categorias de Veículos** - Diferentes tipos de veículos (carro/moto)
- 🛣️ **Cálculo de Serviços** - Sistema inteligente que calcula:
  - Preço da corrida: `distância × preço_km`
  - Tempo estimado: `distância / velocidade_média` (retorno em minutos)
- 📍 **Gestão de Corridas** - Registro e acompanhamento de serviços

## 🗄️ Modelo de Dados (DER)

O projeto utiliza três entidades principais com os seguintes relacionamentos:

```
Usuario (1:N) ← Serviços (N:1) → Categoria

Usuario:
- ID
- Nome
- usuario(email)
- senha
- foto

Serviços:
- ID
- Preço_KM = 3.20
- Distância_km = x
- Velocidade_media = x
- destino = STRING
- PREÇO (calculado: distância × preço_km)
- TEMPO (calculado: velocidade_media/distancia, retorna em min)

Categoria:
- id
- tipo (carro/moto)
```

## 🚀 Tecnologias Utilizadas

- **Framework:** NestJS
- **Linguagem:** TypeScript
- **Banco de Dados:** MySQL
- **ORM:** TypeORM
- **Autenticação:** JWT (JSON Web Tokens)
- **Validação:** Class Validator
- **Documentação:** Swagger (em desenvolvimento)

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- MySQL
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/Grupo2-JS09/generation-veloGo.git
cd generation-veloGo
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

```env
# Porta da aplicação
PORT=3000

# Configurações do Banco de Dados
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=velogo_db

# JWT Secret (mantenha confidencial)
JWT_SECRET=sua_chave_secreta_aqui

# Ambiente
NODE_ENV=development
```

4. **Execute as migrações do banco de dados**
```bash
npm run migration:run
```

5. **Inicie a aplicação**

```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run start:prod
```

A aplicação estará rodando em `http://localhost:3000`

## 🛣️ Rotas da API

### Autenticação
- `POST /auth/login` - Login de usuário
- `POST /auth/register` - Registro de novo usuário

### Usuários
- `GET /usuarios` - Lista todos os usuários
- `GET /usuarios/:id` - Busca usuário por ID
- `POST /usuarios` - Cria novo usuário
- `PUT /usuarios/:id` - Atualiza usuário
- `DELETE /usuarios/:id` - Remove usuário

### Categorias
- `GET /categorias` - Lista todas as categorias
- `GET /categorias/:id` - Busca categoria por ID
- `POST /categorias` - Cria nova categoria
- `PUT /categorias/:id` - Atualiza categoria
- `DELETE /categorias/:id` - Remove categoria

### Serviços
- `GET /servicos` - Lista todos os serviços
- `GET /servicos/:id` - Busca serviço por ID
- `POST /servicos` - Cria novo serviço (calcula preço e tempo automaticamente)
- `PUT /servicos/:id` - Atualiza serviço
- `DELETE /servicos/:id` - Remove serviço

## 🧪 Testes

Os testes foram realizados utilizando o **Insomnia**.

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📊 Estrutura de Branches

O projeto foi desenvolvido com uma estratégia de branches organizada:

- `main` - Branch principal (produção)
- `develop` - Branch de desenvolvimento
- `feature/usuario` - Desenvolvimento da entidade Usuário
- `feature/categoria` - Desenvolvimento da entidade Categoria
- `feature/servicos` - Desenvolvimento da entidade Serviços

Após o desenvolvimento individual, todas as features foram mergeadas para a branch `develop` e posteriormente para a `main`.

## 👥 Equipe de Desenvolvimento

### Grupo 2 - JS09 Generation Brasil

| Desenvolvedor | Responsabilidade |
|---------------|------------------|
| **Vinicius** | Entidade Serviços |
| **Elzilane** | Entidade Categoria |
| **Benner** | Entidade Categoria |
| **Maristela** | Entidade Usuário |
| **Paulo** | Documentação |
| **Mateus** | Testes |
| **Anna** | Desenvolvimento Geral |

## 📝 Licença

Este projeto foi desenvolvido como parte do bootcamp da Generation Brasil e é distribuído sob a licença MIT.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões, entre em contato com a equipe do Grupo 2 - JS09.

---

**Desenvolvido com 💜 pela turma JS09 da Generation Brasil**
