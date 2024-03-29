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

Lembre-se de executar os comandos: <code>npx sequelize db:create</code> e <code>npx sequelize db:migrate</code> para criar o banco de dados.
Estes comandos devem ser executados após todas instalações para criar o banco de dados.

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
<img height="300" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b9fa210-4b87-47c5-9936-d9dcbf21718f/deub14a-dc6b14eb-7067-4ed8-a22e-a3c3deca343c.png/v1/fill/w_1280,h_326,q_80,strp/criar_by_darkdanielr_deub14a-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI2IiwicGF0aCI6IlwvZlwvOWI5ZmEyMTAtNGI4Ny00N2M1LTk5MzYtZDlkY2JmMjE3MThmXC9kZXViMTRhLWRjNmIxNGViLTcwNjctNGVkOC1hMjJlLWEzYzNkZWNhMzQzYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-9B51t3y_U_YdPU9gKexQS_muP-iv1511sKeDBONShU" />

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
<img height="300" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b9fa210-4b87-47c5-9936-d9dcbf21718f/deub14g-af8e00ff-4680-4b2f-b36d-cc22eab83234.jpg/v1/fill/w_1280,h_377,q_75,strp/procurar_by_darkdanielr_deub14g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc3IiwicGF0aCI6IlwvZlwvOWI5ZmEyMTAtNGI4Ny00N2M1LTk5MzYtZDlkY2JmMjE3MThmXC9kZXViMTRnLWFmOGUwMGZmLTQ2ODAtNGIyZi1iMzZkLWNjMjJlYWI4MzIzNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GpaX6SKqaeNH-Cz1VHZ9wJtc3e6BgWEwV3jFR-m4zLE" />

# Deletando um médico

Para deletar algum médico, faça uma requisição no Postman com método "DELETE" para <code>http://localhost:3000/deletemedic</code> passando na aba "Body" o nome do médico, por exemplo:

```json
{
  "name": "algumnome",
}
```

<img height="300" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b9fa210-4b87-47c5-9936-d9dcbf21718f/deub14d-5a97a90f-b0de-4b96-acdd-f931da46dc61.png/v1/fill/w_1280,h_324,q_80,strp/deletar_by_darkdanielr_deub14d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI0IiwicGF0aCI6IlwvZlwvOWI5ZmEyMTAtNGI4Ny00N2M1LTk5MzYtZDlkY2JmMjE3MThmXC9kZXViMTRkLTVhOTdhOTBmLWIwZGUtNGI5Ni1hY2RkLWY5MzFkYTQ2ZGM2MS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.c-MnmddTXl18lIhPkn-5EV2VBS2PJE4zCaAY1Efv17k" />

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

<img height="300" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b9fa210-4b87-47c5-9936-d9dcbf21718f/deub145-f4776b50-64d1-4379-8023-e964de0fca5c.png/v1/fill/w_1280,h_396,q_80,strp/atualizar_by_darkdanielr_deub145-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk2IiwicGF0aCI6IlwvZlwvOWI5ZmEyMTAtNGI4Ny00N2M1LTk5MzYtZDlkY2JmMjE3MThmXC9kZXViMTQ1LWY0Nzc2YjUwLTY0ZDEtNDM3OS04MDIzLWU5NjRkZTBmY2E1Yy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NUeRmAmh4cBanhtVVDDXwPXmvYK-c9UJ88f5oJ6QvAo" />

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
