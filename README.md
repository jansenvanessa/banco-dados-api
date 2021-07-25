# Integração do Banco de Dados Mongo com API

## API Base

Para integrarmos o banco de dados mongo com uma api, primeiro vamos precisar de uma api. Vamos utilizar a mesma API da aula da semana 11. Deixei a mesma pronta na pasta `api-projeto-base`.

Com esse projeto na sua máquina, você deve inicialmente, via terminal, navegar até a pasta do projeto e rodar `npm install` para instalar as dependências necessárias do projeto. Ao rodar esse comando, a pasta `node_modules` será gerada automaticamente.

Com isso podemos rodar nossa api utilizando `npm start`.

### Testando a API Base via Postman

Com o nosso servidor rodando com a api, podemos testar as rotas da nossa API utilizando o Postman, para ver como ela está funcionando. Para facilitar, já deixei uma collection do Postman pronta na pasta `docs` do projeto base. Dentro dessa pasta você irá encontrar o arquivo *Reprograma-Trip.postman_collection.json*

Abra o programa Postman no seu computador e clique em "Importar":

![postman-import](https://i.imgur.com/CTrziuX.png)

Com isso irá aparecer uma janela onde você deverá importar um arquivo. Selecione o arquivo *Reprograma-Trip.postman_collection.json* e o importe para o postman. Feito isso a collection com todas as rotas da nossa api da aula da semana 11 estarão disponíveis para utilizarmos e testarmos.

## Banco de Dados na API

Se repararmos no nosso código da nossa api base, nossas informações estão sendos salvas em arquivos json dentro da pasta models. Temos o arquivo `passengers.json` que guarda informações de passageiros e o arquivo `travels.json` que guardam informações de viagens. Podemos evoluir nosso código e ao invés de utilizarmos arquivos para gravar nossos dados, por que não utilizar um banco de dados? E já que nossa api já está preparada para trabalhar com json, por que não utilizar um banco de dados de documentos Mongo onde as informações também ficam em json? :)

### Novo Database

Lembra que na aula passada da semana 12 aprendemos o que era um database, uma collection e documentos? Vamos então criar um novo database chamado `reprograma-trip` para começarmos a trabalhar. Lembra do comando que usamos para criar um novo database?

```
use reprograma-trip
```

### Novas Collections

Como mencionei anteriormente, na nossa api hoje temos dois arquivos dentro da pasta `models`: o arquivo `passengers.json` e o arquivo `travels.json`. Concorda que faz todo sentido criarmos uma collection `Passengers` e uma collection `Travels` no nosso database `reprograma-trip` para armazenarmos essas informações? Então vamos criá-las com os seguintes comandos:

```
db.createCollection('Travels');
db.createCollection('Passengers');
```

### Novos Documentos

Com nossas duas collections criadas e vazias, vamos inserir novos registros! Para isso utilize os comandos abaixo:

* Inserir passageiros:
```
db.Passengers.insertMany([
    {
        "id": "F4fBusex3Kl6Di6GjABba7gK0",
        "name": "Joana Vieira",
        "email": "joanavieira@email.com",
        "documentNumber": "195737948",
        "travelId": "kD7fmA9JykldrmpJnusr"
    },
    {
        "id": "1cHefaj2axkp0EqHb0lfCqKus",
        "name": "Sophie Nascimento",
        "email": "sophienascimento@email.com",
        "documentNumber": "040080063",
        "travelId": "kD7fmA9JykldrmpJnusr"
    },
    {
        "id": "dzf6LDdqe5LBpudGErhkBCkk1",
        "name": "Maria Julia Oliveira",
        "email": "mariaoliveira@email.com",
        "documentNumber": "184553967",
        "travelId": "kD7fmA9JykldrmpJnusr"
    },
    {
        "id": "8jE_4qJFoFzsC3L4q9o5gzia1",
        "name": "Davi da Mata",
        "email": "davimata@email.com",
        "documentNumber": "208164566",
        "travelId": "kD7fmA9JykldrmpJnusr"
    },
    {
        "id": "uD15jjn40pk5lnp6EGcrqI4bs",
        "name": "Maria Clara Costa",
        "email": "mariacosta@email.com",
        "documentNumber": "280331726",
        "travelId": "kD7fmA9JykldrmpJnusr"
    },
    {
        "id": "0mi9506yivAGwKgvuh4",
        "name": "Paula Reis",
        "email": "paulinhareis@email.com",
        "documentNumber": "8473620492",
        "travelId": "kD7fmA9JykldrmpJnusr"
    },
    {
        "id": "wBqe97Ha1dyh5HtaEvawu5kEz",
        "name": "Arthur Moura",
        "email": "arthurmoura@email.com",
        "documentNumber": "387206719",
        "travelId": "9sbaspCe7oJvy-GKkjIL"
    },
    {
        "id": "E0IypgHI3HoE_kz0C41bEmxva",
        "name": "Maria Clara Dias",
        "email": "mariaclaradias@email.com",
        "documentNumber": "692461823",
        "travelId": "9sbaspCe7oJvy-GKkjIL"
    },
    {
        "id": "DBxl0rpBL9E_f89IGuAEeiF2w",
        "name": "Isabelly da Cunha",
        "email": "isabellycunha@email.com",
        "documentNumber": "120815289",
        "travelId": "9sbaspCe7oJvy-GKkjIL"
    },
    {
        "id": "tDxpl08frs88-jbjwb4aFhxgC",
        "name": "Enzo Gabriel da Rocha",
        "email": "enzorocha@email.com",
        "documentNumber": "721679670",
        "travelId": "9sbaspCe7oJvy-GKkjIL"
    },
    {
        "id": "snuEFfjq2i_mJbqi6_q4Gk4tb",
        "name": "Maria Vitória Martins",
        "email": "vitoriamartins@email.com",
        "documentNumber": "696204275",
        "travelId": "9sbaspCe7oJvy-GKkjIL"
    },
    {
        "id": "gvIlAfFiCbt5d9p5vu3s046He",
        "name": "Thales da Rosa",
        "email": "thalesrosa@email.com",
        "documentNumber": "145969881",
        "travelId": "jnHbd4mshsHte2wujfyI"
    },
    {
        "id": "FkfeFvr0p5xGhjLsGsp996F0F",
        "name": "Calebe Fernandes",
        "email": "calebefernandes@email.com",
        "documentNumber": "067503009",
        "travelId": "jnHbd4mshsHte2wujfyI"
    },
    {
        "id": "3Jti_C2EAJ0Clf3ppeEIJb1Bb",
        "name": "João Carvalho",
        "email": "joaocarvalho@email.com",
        "documentNumber": "218256813",
        "travelId": "jnHbd4mshsHte2wujfyI"
    },
    {
        "id": "dKzq4xh6hg9wJkJCv5uF06538",
        "name": "Laís Nascimento",
        "email": "laisnascimento@email.com",
        "documentNumber": "544412935",
        "travelId": "jnHbd4mshsHte2wujfyI"
    },
    {
        "id": "AluikBnfwH-JIKbdaxbB3DuA5",
        "name": "Vitor Hugo Pereira",
        "email": "vitorhugopereira@email.com",
        "documentNumber": "978479046",
        "travelId": "jnHbd4mshsHte2wujfyI"
    },
    {
        "id": "dagr4lqbwLhLvCtnyjqrv624B",
        "name": "Marcos Vinicius Moraes",
        "email": "marcosmoraes@email.com",
        "documentNumber": "962516161",
        "travelId": "an78aBc2u00D9qlartwv"
    },
    {
        "id": "gJaqeHoik8BHKdz0H5CBoLa0B",
        "name": "Alícia Correia",
        "email": "aliciacorreira@email.com",
        "documentNumber": "694592814",
        "travelId": "an78aBc2u00D9qlartwv"
    },
    {
        "id": "7Lqf0kfxvflz_a3ik6fEaeGqF",
        "name": "Isabella Moreira",
        "email": "isabellamoreira@email.com",
        "documentNumber": "480521741",
        "travelId": "an78aBc2u00D9qlartwv"
    },
    {
        "id": "bkh4yuyofdkwBf1dEpg5Ld3ma",
        "name": "Murilo Teixeira",
        "email": "muriloteixeira@email.com",
        "documentNumber": "691878892",
        "travelId": "an78aBc2u00D9qlartwv"
    },
    {
        "id": "bIIvKsHellbs61kKxFE27HAIb",
        "name": "Diogo Cardoso",
        "email": "diogocardoso@email.com",
        "documentNumber": "355588241",
        "travelId": "an78aBc2u00D9qlartwv"
    },
    {
        "id": "Xc1eC1jFir05cc742sD6zb2oq",
        "name": "Eloah das Neves",
        "email": "eloahneves @email.com",
        "documentNumber": "665853451",
        "travelId": "mLhzx89FdCq0lK54luyg"
    },
    {
        "id": "FzvZXlF2uwqltYzB7s93plk1b",
        "name": "João Santos",
        "email": "joaosantos@email.com",
        "documentNumber": "784150983",
        "travelId": "mLhzx89FdCq0lK54luyg"
    },
    {
        "id": "fjlD4Aok9mckDCi6u40t10Ct3",
        "name": "Mirella Costa",
        "email": "mirellacosta@email.com",
        "documentNumber": "375038047",
        "travelId": "mLhzx89FdCq0lK54luyg"
    },
    {
        "id": "BiunrDBCeh9cnhrodd39qv0mB",
        "name": "Maria Eduarda Carvalho",
        "email": "maducarvalho@email.com",
        "documentNumber": "812337953",
        "travelId": "mLhzx89FdCq0lK54luyg"
    },
    {
        "id": "ADjf3vYbXDFbs1fnq0XEXvkkq",
        "name": "Mariana Farias",
        "email": "marifarias@email.com",
        "documentNumber": "881695664",
        "travelId": "mLhzx89FdCq0lK54luyg"
    }
]);
```

* Inserir Viagens:

```
db.Travels.insertMany([{
        "id": "jIan-LdcKJa2hj2zJ1m_",
        "durationPrediction": "08:27min",
        "stops": "1",
        "derpature": {
            "local": "São Paulo",
            "time": "Nov 02 2021 22:00:00"
        },
        "destination": {
            "local": "Rio de Janeiro",
            "time": "Nov 03 2021 06:27:00"
        },
        "busInfos": {
            "registerNumber": "979620",
            "capacity": "40"
        },
        "driverInfos": {
            "id": "iIt_aijKGGf-wibaF7i12m-hs",
            "name": "Gustavo Henrique Melo",
            "license": "41713-4219"
        },
        "passengersInfos": [
            {
                "id": "EfL80lA1y3gstpclKL9w-g-3u",
                "name": "Maria Cecília da Conceição",
                "email": "mariaconceicao@email.com",
                "documentNumber": "899439400"
            },
            {
                "id": "3bq-Kkvf8Cd3Ks08p_zhwj_gl",
                "name": "Catarina Mendes",
                "email": "catarinamendes@email.com",
                "documentNumber": "933097178"
            },
            {
                "id": "cedinAHGhyjjwGKulty_q1GqD",
                "name": "Pietro Pires",
                "email": "pietropires@email.com",
                "documentNumber": "974685470"
            },
            {
                "id": "p05z6iL-_hooI-9qxAe4wHFpJ",
                "name": "André da Luz",
                "email": "andreluz@email.com",
                "documentNumber": "547679013"
            },
            {
                "id": "L9oxoChtuLGhFzlhxwl6C190x",
                "name": "Camila Fernandes",
                "email": "camilafernandes@email.com",
                "documentNumber": "561205047"
            },
            {
                "id": "153p9rtjpa",
                "name": "Josélia Catarina",
                "email": "joseliacatarina@email.com",
                "documentNumber": "984763498",
                "travelId": "jIan-LdcKJa2hj2zJ1m_"
            },
            {
                "id": "vogf5o1hib8",
                "name": "Ana Catarina",
                "email": "anacatarina@email.com",
                "documentNumber": "4839483290",
                "travelId": "jIan-LdcKJa2hj2zJ1m_"
            },
            {
                "id": "1rn2v8moqug",
                "name": "Julia Catarina",
                "email": "juliacatarina@email.com",
                "documentNumber": "1923012937",
                "travelId": "jIan-LdcKJa2hj2zJ1m_"
            }
        ]
    },
    {
        "id": "xdb4oK_G9lkIAK7KFJD4",
        "durationPrediction": "08:10min",
        "stops": "1",
        "derpature": {
            "local": "Rio de Janeiro",
            "time": "Ago 10 2021 12:00:00"
        },
        "destination": {
            "local": "São Paulo",
            "time": "Ago 10 2021 20:10:00"
        },
        "busInfos": {
            "registerNumber": "2095852",
            "capacity": "50"
        },
        "driverInfos": {
            "id": "d5tezpEc9lk5uut6EDHcxuDfH",
            "name": "Emanuel Alves",
            "license": "8816-05419"
        },
        "passengersInfos": [
            {
                "id": "mhIf_2bmAxgx5nj7iIun6bzi",
                "name": "Henrique Barros",
                "email": "henriquebarros@email.com",
                "documentNumber": "528527554"
            },
            {
                "id": "7KBI7sHmkok9LkK3xo2_t_njr",
                "name": "Ana Clara Farias",
                "email": "anaclarafarias@email.com",
                "documentNumber": "528527554"
            },
            {
                "id": "hE0HJzshDGgC5gw_IlH4sBsdt",
                "name": "Luana Mendes",
                "email": "luanamendes@email.com",
                "documentNumber": "429201923"
            },
            {
                "id": "0_vrDqnCI49c_rBlK9g-dtmLy",
                "name": "Rebeca Pires",
                "email": "rebecapires@email.com",
                "documentNumber": "110633681"
            },
            {
                "id": "1g1bbycDuH3aC2GL4G6vGvEwH",
                "name": "Davi Luiz da Mota",
                "email": "daviluizdamota@email.com",
                "documentNumber": "347626322"
            }
        ]
    },
    {
        "id": "kD7fmA9JykldrmpJnusr",
        "durationPrediction": "52:00min",
        "stops": "4",
        "derpature": {
            "local": "Recife",
            "time": "Set 20 2021 10:00:00"
        },
        "destination": {
            "local": "São Paulo",
            "time": "Set 22 2021 14:38:00"
        },
        "busInfos": {
            "registerNumber": "9936939",
            "capacity": "50"
        },
        "driverInfos": {
            "id": "ADofCi2zC0kycwJj4rAA245ID",
            "name": "João Miguel Rodrigues",
            "license": "520-23-897"
        },
        "passengersInfos": [
            {
                "id": "F4fBusex3Kl6Di6GjABba7gK0",
                "name": "Joana Vieira",
                "email": "joanavieira@email.com",
                "documentNumber": "195737948"
            },
            {
                "id": "1cHefaj2axkp0EqHb0lfCqKus",
                "name": "Sophie Nascimento",
                "email": "sophienascimento@email.com",
                "documentNumber": "040080063"
            },
            {
                "id": "dzf6LDdqe5LBpudGErhkBCkk1",
                "name": "Maria Julia Oliveira",
                "email": "mariaoliveira@email.com",
                "documentNumber": "184553967"
            },
            {
                "id": "8jE_4qJFoFzsC3L4q9o5gzia1",
                "name": "Davi da Mata",
                "email": "davimata@email.com",
                "documentNumber": "208164566"
            },
            {
                "id": "uD15jjn40pk5lnp6EGcrqI4bs",
                "name": "Maria Clara Costa",
                "email": "mariacosta@email.com",
                "documentNumber": "280331726"
            }
        ]
    },
    {
        "id": "9sbaspCe7oJvy-GKkjIL",
        "durationPrediction": "52:27min",
        "stops": "4",
        "derpature": {
            "local": "São Paulo",
            "time": "Out 24 2021 22:00:00"
        },
        "destination": {
            "local": "Recife",
            "time": "Out 27 2021 02:27:00"
        },
        "busInfos": {
            "registerNumber": "8945740",
            "capacity": "55"
        },
        "driverInfos": {
            "id": "Ftfuuh4_-6Aa3pa3vbgqxFiLG",
            "name": "Marcos Vinicius Rodrigues",
            "license": "83019-7529"
        },
        "passengersInfos": [
            {
                "id": "wBqe97Ha1dyh5HtaEvawu5kEz",
                "name": "Arthur Moura",
                "email": "arthurmoura@email.com",
                "documentNumber": "387206719"
            },
            {
                "id": "E0IypgHI3HoE_kz0C41bEmxva",
                "name": "Maria Clara Dias",
                "email": "mariaclaradias@email.com",
                "documentNumber": "692461823"
            },
            {
                "id": "DBxl0rpBL9E_f89IGuAEeiF2w",
                "name": "Isabelly da Cunha",
                "email": "isabellycunha@email.com",
                "documentNumber": "120815289"
            },
            {
                "id": "tDxpl08frs88-jbjwb4aFhxgC",
                "name": "Enzo Gabriel da Rocha",
                "email": "enzorocha@email.com",
                "documentNumber": "721679670"
            },
            {
                "id": "snuEFfjq2i_mJbqi6_q4Gk4tb",
                "name": "Maria Vitória Martins",
                "email": "vitoriamartins@email.com",
                "documentNumber": "696204275"
            }
        ]
    },
    {
        "id": "jnHbd4mshsHte2wujfyI",
        "durationPrediction": "06:33min",
        "stops": "1",
        "derpature": {
            "local": "São Paulo",
            "time": "Jan 02 2022 22:00:00"
        },
        "destination": {
            "local": "Santa Cataria",
            "time": "Jan 03 2022 05:13:00"
        },
        "busInfos": {
            "registerNumber": "1242797",
            "capacity": "45"
        },
        "driverInfos": {
            "id": "bKDx6zaFtugIu7mlh4FpDLH1C",
            "name": "Alexandre Oliveira",
            "license": "2574-00410"
        },
        "passengersInfos": [
            {
                "id": "gvIlAfFiCbt5d9p5vu3s046He",
                "name": "Thales da Rosa",
                "email": "thalesrosa@email.com",
                "documentNumber": "145969881"
            },
            {
                "id": "FkfeFvr0p5xGhjLsGsp996F0F",
                "name": "Calebe Fernandes",
                "email": "calebefernandes@email.com",
                "documentNumber": "067503009"
            },
            {
                "id": "3Jti_C2EAJ0Clf3ppeEIJb1Bb",
                "name": "João Carvalho",
                "email": "joaocarvalho@email.com",
                "documentNumber": "218256813"
            },
            {
                "id": "dKzq4xh6hg9wJkJCv5uF06538",
                "name": "Laís Nascimento",
                "email": "laisnascimento@email.com",
                "documentNumber": "544412935"
            },
            {
                "id": "AluikBnfwH-JIKbdaxbB3DuA5",
                "name": "Vitor Hugo Pereira",
                "email": "vitorhugopereira@email.com",
                "documentNumber": "978479046"
            }
        ]
    }
]);
```

Com o banco de dados populado, caso você rode a consulta `db.getCollection('Passengers').find({})` e a consulta `db.getCollection('Travels').find({})` você verá que a mesma retornará informações, o que antes não acontecia com essas collections vazias.

## Banco de Dados populado, e agora?

Agora que temos nossa base de dados pronta para poder ser utilizada pela api, podemos começar a fazer alterações na mesma para parar de trabalhar com arquivos json e passar olhar para o nosso banco de dados que acabamos de preparar.



----

Início da integração do backend com o banco de dados a fim de mostrar e adicionar a parte de modelo. Até aqui, será trabalhado apenas com controllers, o ideal é nessa semana dar início ao contexto de model.

- Integração do Back-End com o banco de dados
    - Utilização do Mongoose (preferencialmente)
        - String de Conexão, usuário, senha, url
- Introdução Model;

**Objetivo:** Entender o que são bancos de dados. Aprender utilização básica de MongoDB. Conectar Banco de Dados e Aplicação utilizando `moongose`.

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
