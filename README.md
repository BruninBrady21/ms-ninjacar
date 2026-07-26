# MS NinjaCar

Microsserviço responsável pelo gerenciamento de veículos do projeto NinjaCar.

O serviço disponibiliza uma API REST para cadastro, consulta, atualização e exclusão de veículos, utilizando PostgreSQL como banco de dados.

---

## Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* PostgreSQL
* Docker
* Docker Compose
* DBeaver
* Postman

---

## Funcionalidades

O microsserviço possui as seguintes operações:

* Cadastro de veículos
* Listagem de veículos
* Consulta de veículo por ID
* Atualização de veículos
* Exclusão de veículos
* Validação dos dados recebidos
* Validação dos IDs informados
* Tratamento de placas duplicadas
* Tratamento centralizado de erros

---

## Estrutura do projeto

```text
src/
├── controllers/
├── errors/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── types/
├── utils/
└── app.ts
```

### Controllers

Responsáveis por receber as requisições HTTP e retornar as respostas da API.

### Services

Responsáveis pela lógica de negócio da aplicação.

### Repositories

Responsáveis pela comunicação com o banco de dados PostgreSQL.

### Models

Representam as entidades utilizadas pela aplicação.

### Routes

Definem os endpoints disponibilizados pelo microsserviço.

### Middlewares

Contêm funcionalidades executadas durante o processamento das requisições, incluindo o tratamento centralizado de erros.

### Errors

Contêm as classes utilizadas para representar erros controlados da aplicação.

### Types

Contêm as tipagens utilizadas pelo projeto.

### Utils

Contêm funções auxiliares e reutilizáveis, incluindo validações de IDs e dados de veículos.

---

## Banco de dados

O projeto utiliza PostgreSQL como banco de dados.

O banco é executado através do Docker Compose.

A tabela principal utilizada pelo microsserviço é:

```text
vehicles
```

Com os seguintes campos:

| Campo            | Tipo         | Descrição           |
| ---------------- | ------------ | ------------------- |
| id               | SERIAL       | Identificador único |
| brand            | VARCHAR(100) | Marca do veículo    |
| model            | VARCHAR(100) | Modelo do veículo   |
| manufacture_year | INTEGER      | Ano de fabricação   |
| plate            | VARCHAR(10)  | Placa do veículo    |
| color            | VARCHAR(100) | Cor do veículo      |

A placa é configurada como um valor único no banco de dados.

---

## Endpoints

### Listar veículos

```http
GET /vehicles
```

Retorna todos os veículos cadastrados.

---

### Buscar veículo por ID

```http
GET /vehicles/:id
```

Retorna um veículo específico através do seu ID.

---

### Cadastrar veículo

```http
POST /vehicles
```

Exemplo de requisição:

```json
{
  "brand": "Toyota",
  "model": "Corolla",
  "manufactureYear": 2024,
  "plate": "ABC-1234",
  "color": "Prata"
}
```

Resposta esperada:

```http
201 Created
```

---

### Atualizar veículo

```http
PUT /vehicles/:id
```

Exemplo:

```json
{
  "brand": "Toyota",
  "model": "Corolla XEi",
  "manufactureYear": 2025,
  "plate": "ABC-1234",
  "color": "Preto"
}
```

Resposta esperada:

```http
200 OK
```

---

### Excluir veículo

```http
DELETE /vehicles/:id
```

Resposta esperada:

```http
204 No Content
```

---

## Validações

A API realiza validações para:

* IDs inválidos
* IDs menores ou iguais a zero
* Marca obrigatória
* Modelo obrigatório
* Ano de fabricação válido
* Ano de fabricação inteiro
* Ano de fabricação não superior ao ano atual
* Placa obrigatória
* Formato válido de placa
* Cor obrigatória

---

## Tratamento de erros

A API utiliza tratamento centralizado de erros.

Principais códigos HTTP utilizados:

| Código | Descrição                      |
| ------ | ------------------------------ |
| 200    | Operação realizada com sucesso |
| 201    | Recurso criado com sucesso     |
| 204    | Recurso excluído com sucesso   |
| 400    | Dados ou parâmetros inválidos  |
| 404    | Recurso não encontrado         |
| 409    | Conflito, como placa duplicada |
| 500    | Erro interno do servidor       |

---

## Execução do projeto

Instale as dependências:

```bash
npm install
```

Inicie o banco de dados:

```bash
docker compose up -d
```

Inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

A API estará disponível na porta configurada no projeto.

---

## Testes

Os endpoints foram testados utilizando Postman.

Foram realizados testes de:

* Cadastro de veículos
* Consulta de veículos
* Consulta por ID
* Atualização de veículos
* Exclusão de veículos
* IDs inválidos
* IDs inexistentes
* Dados inválidos
* Anos inválidos
* Placas inválidas
* Placas duplicadas
* Tratamento de erros HTTP

Todos os cenários previstos foram validados com sucesso.

---

## Próximas etapas

O projeto faz parte de uma arquitetura composta por múltiplos microsserviços.

A próxima etapa consiste na implementação do:

```text
ms-query-ninjacar
```

Responsável pelas operações de consulta de veículos e pela integração com o fluxo de mensageria do projeto.

Posteriormente, os microsserviços serão integrados através de um sistema de mensageria.
