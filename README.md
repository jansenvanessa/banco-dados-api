# Integração do Banco de Dados Mongo com API

## API Base

Para integrarmos o banco de dados mongo com uma api, primeiro vamos precisar de uma api. Vamos utilizar a mesma API da aula da semana 11. Deixei a mesma pronta na pasta `api-projeto-base`.

Com esse projeto na sua máquina, você deve inicialmente, via terminal, navegar até a pasta do projeto e rodar `npm install` para instalar as dependências necessárias do projeto. Ao rodar esse comando, a pasta `node_modules` será gerada automaticamente.

Com isso podemos rodar nossa api utilizando `npm start`.


----

1. Moongose
    1. Conceito
    1. Instalação
    1. Conectando com o banco
    1. Criando Esquemas e Modelos
        1. Tipagem
        1. Validação
        1. Propriedades virtuais
    1. Métodos nativos
        1. Inserindo (`save`, `create` e `insertMany`)
        1. Consultando (`find`, `findById`, `findOne`)
        1. Atualizando (`update`, `updateOne`, `updateMany`)
        1. Excluindo (`deleteOne`, `deleteMany`, `remove`)
1. Arquitetura do Projeto
    1. MVC - Manter a estrutura do projeto organizada e separar _concerns_

### Opcional

Outros métodos do moongose:
* `count`
* `exists`
* `where`

### Sugestões de fontes

- [https://medium.com/@rafaelbarbosadc/criando-uma-api-rest-com-node-js-express-mongoose-f75a27e8cdc1](https://medium.com/@rafaelbarbosadc/criando-uma-api-rest-com-node-js-express-mongoose-f75a27e8cdc1)
- [https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose)
- [https://mongoosejs.com/docs/api.html#model](https://mongoosejs.com/docs/api.html#model)

## Exercício

Utilizar cada comando aprendido como exercício. Elas já deverão ter bases de dados cadastradas com dados, dos exercícios da semana anterior. Agora devem fazer modelos e rotas para consultas. Testar com Postman.

## Entregável

Utilizando os dados dos entregáveis de API e o banco de dados das semanas anteriores. As alunas devem conectar o projeto com o banco, e refazer os métodos que antes manipulavam dados de arquivos e manipulá-los no nível de banco de dados.

------------

## Links de Repositórios

- https://github.com/reprograma/on6-xp-s13-bd
- https://github.com/reprograma/on7-porto-s13-integracao-bd
- https://github.com/reprograma/On9-Accenture-S13-Backend-BD

## Tabela de Conteúdos

| Tópico | Tipo | Semana |
| ----------- | ----------- | ----------- |
| 👩🏾‍🏫 [API + BD](03.%20API%20+%20BD.md) | Lição; Exercício; Entregável | 13/18 |
