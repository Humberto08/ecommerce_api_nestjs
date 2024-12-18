# Ecommerce API NestJS

## Descrição
Uma API para gerenciar operações de e-commerce, construída utilizando o framework [NestJS](https://nestjs.com/). Esta aplicação possui suporte a funcionalidades como cadastro de categorias e produtos, autenticação de usuários, e gerenciamento de pedidos.

## Tecnologias Utilizadas

- **Node.js**
- **NestJS** (v10.4.1)
- **TypeScript**
- **TypeORM**
- **PostgreSQL**
- **Jest** (para testes unitários)
- **Docker** (para ambientes consistentes)

## Funcionalidades Principais

- **Categorias**:
  - Listar todas as categorias.
  - Buscar uma categoria por ID ou nome.
  - Criar, editar e excluir categorias.

- **Produtos**:
  - Listar produtos por categoria.
  - Criar, editar e excluir produtos.

- **Autenticação**:
  - Registro e login de usuários.
  - Autenticação baseada em JWT.

- **Pedidos**:
  - Criar pedidos para usuários autenticados.
  - Listar pedidos por usuário.

## Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 16 ou superior)
- **Docker** e **Docker Compose**
- **PostgreSQL**

## Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/ecommerce-api-nestjs.git
cd ecommerce-api-nestjs
```

### 2. Configurar as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL=postgres://username:password@localhost:5432/ecommerce
JWT_SECRET=sua-chave-secreta
JWT_EXPIRATION=3600
```

### 3. Subir os Serviços com Docker

```bash
docker-compose up -d
```

### 4. Instalar as Dependências

```bash
npm install
```

### 5. Executar as Migrações

```bash
npm run migration:run
```

### 6. Iniciar o Servidor

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.

## Testes

Para executar os testes unitários, use o comando:

```bash
npm run test
```

Para executar os testes com cobertura:

```bash
npm run test:cov
```

## Estrutura do Projeto

```plaintext
src/
├── auth/                # Módulo de autenticação
├── category/            # Módulo de categorias
├── product/             # Módulo de produtos
├── order/               # Módulo de pedidos
├── user/                # Módulo de usuários
├── shared/              # Código compartilhado (ex: interceptors, filters)
└── main.ts              # Ponto de entrada da aplicação
```

## Documentação da API

A documentação completa da API está disponível no Postman. Você pode acessá-la através do seguinte link:

[Documentação da API](https://documenter.getpostman.com/view/24656609/2sAYJ1m3F2)

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch com sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Envie para a branch principal: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.

---

Desenvolvido com ❤️ por [Humberto Luciano](https://github.com/Humberto08)