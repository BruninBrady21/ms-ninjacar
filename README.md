# 🚗 NinjaCar — Vehicle Registration Microservice

Microsserviço responsável pelo cadastro e gerenciamento de veículos do projeto NinjaCar.

Este projeto faz parte de uma arquitetura baseada em microsserviços, utilizando Node.js, TypeScript, Express e PostgreSQL. A comunicação entre os microsserviços será realizada posteriormente por meio de mensageria com RabbitMQ.

---

## 📌 Sobre o projeto

O `ms-ninjacar` é o microsserviço responsável pelas operações relacionadas ao cadastro e gerenciamento de veículos.

A aplicação foi desenvolvida utilizando uma arquitetura em camadas, separando as responsabilidades entre rotas, controllers, services e repositories.

Atualmente, o microsserviço possui um endpoint de consulta de veículos integrado a um banco de dados PostgreSQL executado em um container Docker.

---

## 🏗️ Arquitetura

O fluxo principal da aplicação segue a seguinte estrutura:

```text
Cliente (Postman / Frontend)
            │
            ▼
         Routes
            │
            ▼
        Controller
            │
            ▼
          Service
            │
            ▼
        Repository
            │
            ▼
        PostgreSQL
```

### Responsabilidades das camadas

* **Routes:** definição dos endpoints HTTP da aplicação.
* **Controller:** gerenciamento das requisições e respostas HTTP.
* **Service:** implementação das regras de negócio da aplicação.
* **Repository:** comunicação e acesso aos dados persistidos no banco.
* **Model:** definição da estrutura dos dados utilizados pela aplicação.
* **Config:** configuração de recursos externos, como a conexão com o banco de dados.

---

## 🛠️ Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* PostgreSQL
* Docker
* Docker Compose
* DBeaver
* `pg` — driver de conexão com PostgreSQL
* `tsx` — execução do TypeScript em desenvolvimento com atualização automática

---

## 📁 Estrutura do projeto

```text
ms-ninjacar/
│
├── src/
│   ├── config/
│   │   └── database.config.ts
│   │
│   ├── controllers/
│   │   └── vehicle.controller.ts
│   │
│   ├── models/
│   │   └── vehicle.model.ts
│   │
│   ├── repositories/
│   │   └── vehicle.repository.ts
│   │
│   ├── routes/
│   │   └── vehicle.routes.ts
│   │
│   ├── services/
│   │   └── vehicle.service.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── database/
│   └── migrations/
│       └── 001_create_vehicles.sql
│
├── .gitignore
├── docker-compose.yml
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🚙 Modelo de veículo

Atualmente, um veículo possui os seguintes atributos:

| Campo             | Tipo     | Descrição                      |
| ----------------- | -------- | ------------------------------ |
| `id`              | `number` | Identificador único do veículo |
| `brand`           | `string` | Marca do veículo               |
| `model`           | `string` | Modelo do veículo              |
| `manufactureYear` | `number` | Ano de fabricação              |
| `plate`           | `string` | Placa do veículo               |
| `color`           | `string` | Cor do veículo                 |

No banco de dados, os nomes das colunas seguem a convenção `snake_case`, enquanto na aplicação TypeScript é utilizado `camelCase`.

Exemplo:

```text
PostgreSQL: manufacture_year
TypeScript: manufactureYear
```

---

## 🐘 Banco de dados

O projeto utiliza PostgreSQL executado através do Docker.

As configurações atuais são:

```text
Database: ninjacar
User: postgres
Password: postgres
Host: localhost
Port: 5432
```

A infraestrutura do banco é definida no arquivo:

```text
docker-compose.yml
```

Para iniciar o PostgreSQL:

```bash
docker compose up -d
```

Para verificar os containers em execução:

```bash
docker ps
```

Para interromper os containers:

```bash
docker compose down
```

Os dados do PostgreSQL são persistidos através de um volume Docker.

---

## 🗃️ Banco de dados e migrations

A criação da tabela de veículos está documentada no arquivo:

```text
database/migrations/001_create_vehicles.sql
```

A tabela `vehicles` possui atualmente os seguintes campos:

```text
id
brand
model
manufacture_year
plate
color
```

A coluna `id` é utilizada como chave primária.

A coluna `plate` possui uma restrição de unicidade para evitar o cadastro de veículos com placas duplicadas.

---

## 🔌 Conexão com PostgreSQL

A conexão com o banco é realizada através da biblioteca `pg`, utilizando um `Pool` de conexões.

O arquivo responsável pela configuração é:

```text
src/config/database.config.ts
```

O fluxo de acesso aos dados ocorre através do Repository:

```text
VehicleController
        │
        ▼
VehicleService
        │
        ▼
VehicleRepository
        │
        ▼
PostgreSQL Pool
        │
        ▼
PostgreSQL
```

---

## 🌐 Endpoints

### Consultar todos os veículos

```http
GET /vehicles
```

Retorna todos os veículos cadastrados no banco de dados.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Corolla",
    "manufactureYear": 2024,
    "plate": "ABC-1234",
    "color": "Prata"
  }
]
```

---

## ▶️ Como executar o projeto

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm
* Docker Desktop

O DBeaver é recomendado para gerenciamento visual do banco de dados, mas não é obrigatório para executar a aplicação.

---

### 1. Clonar o projeto

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd ms-ninjacar
```

---

### 2. Instalar as dependências

```bash
npm install
```

---

### 3. Iniciar o PostgreSQL

Certifique-se de que o Docker Desktop está em execução.

Depois:

```bash
docker compose up -d
```

---

### 4. Executar a aplicação

```bash
npm run dev
```

A aplicação será executada utilizando o modo de desenvolvimento com `tsx watch`.

---

### 5. Testar a API

Utilize o Postman ou outra ferramenta de requisições HTTP.

Endpoint:

```http
GET http://localhost:3000/vehicles
```

---

## 📌 Status do desenvolvimento

### Microsserviço `ms-ninjacar`

* [x] Configuração inicial do Node.js
* [x] Configuração do TypeScript
* [x] Configuração do Express
* [x] Configuração do `tsx`
* [x] Estrutura de pastas
* [x] Arquitetura Routes → Controller → Service → Repository
* [x] Model `Vehicle`
* [x] Configuração do Docker Compose
* [x] PostgreSQL em container Docker
* [x] Conexão com PostgreSQL
* [x] Criação da tabela `vehicles`
* [x] Integração do Repository com PostgreSQL
* [x] `GET /vehicles`
* [ ] `POST /vehicles`
* [ ] `GET /vehicles/:id`
* [ ] `PUT /vehicles/:id`
* [ ] `DELETE /vehicles/:id`

### Arquitetura de microsserviços

* [x] `ms-ninjacar` — Vehicle Registration Service
* [ ] `ms-query-ninjacar` — Vehicle Query Service
* [ ] Comunicação entre microsserviços
* [ ] RabbitMQ
* [ ] Publicação de eventos
* [ ] Consumo de eventos
* [ ] Sincronização de dados entre microsserviços

### Documentação

* [x] README inicial
* [ ] Documentação completa dos endpoints
* [ ] Documentação da arquitetura final
* [ ] Documentação da mensageria
* [ ] Instruções completas de execução
* [ ] Evidências/testes para entrega

---

## 🚧 Próximos passos

O desenvolvimento seguirá a seguinte ordem:

1. Finalizar o CRUD de veículos no `ms-ninjacar`.
2. Implementar validações e tratamento de erros.
3. Estruturar o `ms-query-ninjacar`.
4. Implementar a comunicação assíncrona utilizando RabbitMQ.
5. Integrar os microsserviços.
6. Documentar a arquitetura e os endpoints.
7. Preparar o projeto para a entrega final.
