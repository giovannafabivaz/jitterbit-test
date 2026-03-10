# Desafio Técnico Jitterbit - API de Gestão de Pedidos

Desenvolvido por: Giovanna Fabíola Vaz

Este projeto consiste em uma API desenvolvida em **Node.js** para o processo seletivo da Jitterbit. Ele foi desenvolvido de acordo com o padrão MVC (Model, View, Controller) para melhor organização das pastas.
A API realiza o recebimento de pedidos em formato JSON, mapeia os campos para um modelo padronizado e persiste os dados em um banco de dados **MySQL**.

## Tecnologias
- **Node.js**
- **Express** (Framework Web)
- **Sequelize** (ORM para persistência em SQL)
- **MySQL** (Banco de Dados Relacional)

## Como Rodar o Projeto?

1. **Pré-requisitos:**
   - Ter o Node.js instalado.
   - Ter o MySQL instalado e rodando.

2. **Configuração do Banco de Dados:**
   - Crie um banco de dados chamado `jitterbit_db` no seu MySQL:
     ```sql
     CREATE DATABASE jitterbit_db;
     ```
   - No arquivo `src/config/database.js`, ajuste o usuário e a senha do seu banco.

3. **Instalação:**
   No terminal, dentro da pasta do projeto, execute:
   ```bash
      npm install

4. **Execução** 
    - Inicie o servidor com o comando:
        ```bash
        node app.js

## Endpoints da API (RODAR NO POSTMAN)

### Criar pedido (post)
    - URL: http://localhost:3000/order
    - Exemplo de Body:
    ``{
        "numeroPedido": "v10089016vdb",
        "valor Total": 10000,
        "dataCriacao": "2023-07-19T12:24:11",
        "items": [
            {
            "idItem": 2434,
            "quantidadeltem": 1,
            "valorltem": 1000
            }
        ]
        }
    ```

### Consultar Pedido (get)
    - URL: http://localhost:3000/order/v10089016vdb
