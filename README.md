## Repositório com aplicação em NodeJS para cadastro de médicos.

Consiste em um sistema para cadastrar, alterar, deletar e selecionar.

### Requisitos

1. VScode instalado.
2. Banco de dados MySQL instalado.
3. Aplicativo Postman para fazer requisições. url: <code>https://www.postman.com/downloads/?utm_source=postman-home</code>

### Clonando o repositório

Entre no terminal e digite:

1. Faça uma pasta no seu computador com o nome que desejar, pode navegar pelo terminal com <code>cd</code> e <code>ls</code> ou ir direto para a pasta pelo gerenciador.
2. Após estar na pasta, caso esteja no gerenciador, clique com botão direito e abra um terminal ali e copie este código <code>git clone </code>.
3. Cole o código no terminal e aperte <code>Enter</code>, após terminal de executar digite <code>code .</code> e aperte <code>Enter</code> novamente.
4. Volte ao terminal e execute <code>npm install</code> ou vá dentro do VScode clique na aba "Terminal", depois "New Terminal" e execute <code>npm install</code>.
5. Após toda instalação ocorrer, a aplicação está pronta para uso!

## Observações importantes

1. O <code>http://localhost:3000/</code> é o endereço padrão para a aplicação funcionar.
2. No postman, na aba "Body" o formato dos objetos devem ser em JSON, aconselho a selecionar o tipo RAW, fica mais fácil de colocar o objeto.
3. Configure o arquivo <code>config.json</code> com as informações do banco de dados e acesso tanto para desenvolvimento e testes, se não nada vai funcionar (provavelmente só o username e password precisam ser alterados para o seu).

## Iniciando

Execute no terminal o comando <code>npm start</code> estando dentro da pasta raiz deste projeto e sua aplicação vai começar a funcionar, no terminal vai aparecer a mensagem: "ouvindo porta 3000!" caso tudo acima tenha sido feito corretamente, caso contrário refaça as etapas anteriores.

# Criando um médico

Para cadastrar um novo médico da forma correta, você deve fazer uma requisição no Postman na aba "Body" do tipo <code>POST</code> para <code>http://localhost:3000/createmedic</code> com o objeto nesta estrutura:

```json
{
    "name": "algumnome",
    "CRM": 1234567,
    "Telefone": 6566565,
    "Celular": 36636366,
    "Cep": "01153000",
    "Especialidade": ["cardiaco", "geral"]
}
```
<img width="100" src="https://drive.google.com/file/d/1sgkHipXg_-gt0KZvKOc14rtRN1c4YADO/view" />

Desta forma você receberá uma mensagem que o médico foi criado!
Não tente criar médicos com nomes iguais, isso resultará em um erro!

Qualquer alteração neste objeto ou falta de alguma chave, resultará em algum erro que a aplicação vai informar.

# Pesquisando por um médico

Para encontrar algum médico, pasta fazer uma requisição no Postman com método "GET" para <code>http://localhost:3000/findmedic</code> passando na aba "Headers" alguma das informações, por exemplo:

Após cadastrar um médico, vá na rota informada e no Postman em headers coloque uma chave qualquer do objeto de cadastro, como <code>CRM</code> com o valor do médico cadastrado, que nesse caso é <code>"1234567"</code>. Isto irá retornar o médico pesquisado, tente com as outras chaves também!, somente pela Especialidade não é possível.

Exemplo do objeto retornado ao pesquisar pelo nome <code>medico sensasional</code>

```json
{
    "medic": {
        "id": 2,
        "name": "medico sensasional",
        "CRM": 423442,
        "Telefone": 6566565,
        "Celular": 36636366,
        "Cep": "06786360",
        "Adress": "logradouro: Rua Milton Martins Moura - Vila Francisco Remeikis - Taboão da Serra, SP",
        "Especialidade": "cardiaco, geral"
    }
}
```

# Deletando um médico

Para deletar algum médico, faça uma requisição no Postman com método "DELETE" para <code>http://localhost:3000/deletemedic</code> passando na aba "Body" o nome do médico, por exemplo:

```json
{
  "name": "algumnome",
}
```

A aplicação vai ir no banco de dados, buscar essa pessoa e deletar ela no banco. Caso o médico não exista, vai retornar um erro pedido para que seja cadastrado.

# Atualizando o cadastro de um médico

Para atualizar os dados de algum médico, você precisar saber o <code>id</code> dele, primeiro pesquise pelo médico e guarde o id, após isto faça uma requisição no Postman com método "PATCH" para <code>http://localhost:3000/updatemedic/:id</code> onde o <code>:id</code> será o do médico que foi pesquisado e passando na aba "Body" o nome do médico, por exemplo:

No começo cadastramos nosso primeiro médico com este objeto abaixo, ele foi o primeiro da lista:

```json
{
    "name": "algumnome",
    "CRM": 1234567,
    "Telefone": 6566565,
    "Celular": 36636366,
    "Cep": "01153000",
    "Especialidade": ["cardiaco", "geral"]
}
```

Ao pesquisar por ele, no endereço <code>http://localhost:3000/findmedic</code> como fizemos acima, a aplicação vai retornar o objeto dele com o <code>id: 1</code>, então vamos para o endereço <code>http://localhost:3000/updatemedic/1</code> onde o 1 é o id retornado pelo endereço de pesquisa, então vamos na aba <code>Body</code> colocaremos o seguinte objeto para atualizar o nosso médico cadastrado no começo:

```json
{
    "name": "carinha que mora logo ali",
    "CRM": 8765432,
    "Telefone": 12121212,
    "Celular": 987876767,
    "Cep": "01153000",
    "Especialidade": ["bebês", "oftalmologista"]
}
```

Ao enviar este requisição, o médico selecionado será atualizado.

### Testes

Para visualizar os testes da aplicação execute no terminal <code>npm test</code> e todos os testes vão ser executados, este processo demora um pouco para se concluir.
