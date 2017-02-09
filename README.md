# Rascunho jsDocs + Swagger

Somente um repositório com testes para brincar com jsDocs e Swagger.

## Instalação

É necessário instalar alguns pacotes npm:

`npm install express mongoose nodemon swagger jsdocs swagger-express -g`
    
Para ver/editar a documentação com Swagger, entre na pasta `swagger` e na linha de comando, digite:

`swagger project start` 

Para gerar a documentação via jsDocs, entre na pasta `jsdocs` e na linha de comando, digite:

- Diretório atual: `jsdoc .`
- Todos os diretórios recursivamente: `jsdoc . -r`
- Todos os diretórios recursivamente com arquivo de configuração: `jsdoc . -r -c conf.json`

Para gerar a documentação com Swagger via jsDocs, entre na pasta `api` e na linha de comando digite:

`nodemon npm start`

## Observações

- Estes testes foram feitos com MongoDB;
- É necessário iniciar o MongoDB de utilizar estes testes;
- Dentro de cada pasta é necessário executar o comando `npm install`.

E lá vamos nós! :coffee: :computer: :rocket:

---

# Draft jsDocs + Swagger

It is necessary install some npm packages:

`npm install express mongoose nodemon swagger jsdocs swagger-express -g`
    
For see or edit the documentation with Swagger, at the command line inside folder `swagger`, type:

`swagger project start` 

To generate the documentation with jsDocs, at the command line inside folder `jsdocs` type:

- Actual directory: `jsdoc .`
- All directories recursively: `jsdoc . -r`
- All directoryes recursively with config file: `jsdoc . -r -c conf.json`

To generate documentation with Swagger with jsDocs, at the command line, inside the folder `api` type:

`nodemon npm start`

## P.S.

- These tests works with MongoDB;
- It is necessary start MongoDB before use the tests;
- It is necessary execute the command `npm install` inside each folder.

Let's go! :coffee: :computer: :rocket: