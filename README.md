# NinjaCar - Vehicle Registration Service

Bem-vindo ao **Vehicle Registration Service** do projeto NinjaCar!

Este microsserviço foi desenvolvido para o Tech Challenge da Pós-Tech FIAP (Desenvolvimento Full Stack) e é responsável pelo gerenciamento dos veículos cadastrados no sistema.

Além de realizar todas as operações de escrita (Create, Update e Delete), este serviço publica eventos no RabbitMQ para manter o microsserviço de consultas sincronizado.

---

# Quick Start

```bash
git clone <url-do-repositorio>
cd ms-ninjacar
npm install
docker compose up -d
npm run dev
```

---

# Índice

- Tecnologias Utilizadas
- Arquitetura
- Estrutura do Projeto
- Instalação e Execução
- Endpoints
- Fluxo da Mensageria
- Requisitos Não Funcionais
- Roadmap
- Autor
- Licença

---

# Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- PostgreSQL
- RabbitMQ
- Docker
- DBeaver
- dotenv

---

# Arquitetura

Este microsserviço segue uma arquitetura em camadas:

Controller

↓

Service

↓

Repository

↓

PostgreSQL

Sempre que um veículo é criado, atualizado ou removido, um evento é publicado no RabbitMQ para sincronizar o microsserviço de consultas.

---

# Estrutura do Projeto

```
src
├── config
├── controllers
├── dtos
├── errors
├── messaging
│   ├── constants
│   └── publishers
├── models
├── repositories
├── routes
├── services
├── utils
└── app.ts
```

---

# Instalação e Execução

## Pré-requisitos

- Node.js
- Docker Desktop
- PostgreSQL (via Docker)
- RabbitMQ (via Docker)

## Instalação

```bash
npm install
```

## Executando

```bash
docker compose up -d
npm run dev
```

O serviço estará disponível em:

```
http://localhost:3000
```

---

# Endpoints

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | /vehicles | Cadastra um veículo |
| GET | /vehicles | Lista veículos |
| GET | /vehicles/:id | Busca por ID |
| PUT | /vehicles/:id | Atualiza veículo |
| DELETE | /vehicles/:id | Remove veículo |

---

# Fluxo da Mensageria

Sempre que ocorre uma alteração no cadastro de veículos, um evento é enviado ao RabbitMQ.

Eventos publicados:

- VehicleCreated
- VehicleUpdated
- VehicleDeleted

Fluxo:

Cliente

↓

ms-ninjacar

↓

RabbitMQ

↓

ms-query

---

# Requisitos Não Funcionais

- Arquitetura em camadas
- Repository Pattern
- DTO Pattern
- Tratamento global de erros
- Comunicação assíncrona
- Persistência em PostgreSQL
- Containerização com Docker

---

# Roadmap

- Implementar autenticação
- Implementar testes automatizados
- Adicionar documentação Swagger
- Adicionar logs estruturados

---

# Autor

Projeto desenvolvido para fins acadêmicos na Pós-Tech FIAP.

---

# Licença

Projeto desenvolvido exclusivamente para fins educacionais.