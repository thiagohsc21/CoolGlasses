

![imagem-readme](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/4acb19df-7f76-4876-978e-29199429c98a)


Projeto desenvolvido para a disciplina de Introdução ao Desenvolvimento Web, no ano de 2022.

O tema escolhido por nós foi desenvolver um website que realiza a venda de óculos.

### Autores

| NUSP     | Nome                       |
|----------|----------------------------|
| 11796594 |	Thiago Henrique dos Santos Cardoso     |
| 10716887 |  Eduardo Vinicius Barbosa Rossi         |
| 11796830 |  Adrio Oliveira Alves                   |

### Tabela de conteúdos 

- [1. Requisitos](#1-requisitos)
- [2. Descrição do Projeto](#2-descrição-do-projeto)
- [3. Comentários sobre o código](#3-comentários-sobre-o-código)
- [4. Plano de teste](#4-plano-de-teste)
- [5. Resultados dos testes](#5-resultados-dos-testes)
- [6. Building](#6-building)
- [7. Problemas](#7-problemas)
- [8. Comentários](#8-comentários)

## 1. Requisitos

- O sistema deve permitir dois tipos de usuários: administradores e clientes. 
- O usuário deve se registrar utilizando seu nome, email e senha.
- O usuário pode atualizar seu perfil a qualquer momento, adicionando foto, CPF, endereço, telefone e celular ou alterando o que já está lá. 
- O usuário pode verificar os itens disponíveis, utilizando para isso a aba de produtos.
- O cliente pode realizar compras, utilizando para isso as informações do seu cartão, CPF e endereço de entrega. É preciso estar logado.
- Uma compra é feita clicando sobre o produto e adicionando ele ao carrinho e após isso, acessando o carrinho e finalizando-a. 
- O administrador pode realizar a inclusão, remoção ou edição de produtos. 
- Os produtos são registrados com ID, título, cor, tipo da lente, gênero, categoria, preço, descrição, quantidade disponível, quantidade vendida e imagem. 


## 2. Descrição do projeto

CoolGlasses é uma loja virtual de óculos. O projeto será desenvolvido implementando HTML, CSS, javascript e outros, além do uso de um banco de dados. 

### Diagrama de navegação
![diagramaNavegacao](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/3d8b7148-11bd-444e-b956-c0076aec926f)

#### Mockups

Os mockups se encontram no nesse link para o figma que foi utilizado: [Figma ](https://www.figma.com/file/Q0Aj5abwo0EIDR1jyfYADb/CoolGlasses?node-id=0%3A1)

### Funcionalidades

- Apresentar alguns produtos na homepage.
- Apresentar todos os produtos com preços com a possibilidade também de filtrar por tipos de óculos.
- Visualização de um produto em sua pagina especifica, contendo com uma descrição e um botão para adicionar ao carrinho.
- Possibilidade do usuário se registrar com nome, e-mail e senha.
- Acessar e editar as credenciais do usuário após estar logado.
- Apresentar os produtos no carrinho, com possibilidade de editar quantidades, etc.
- Finalizar compra, a partir da inserção do CPF, número do cartão, data de validade do cartão, codigo de segurança e endereço de entrega
- Permitir a adição, remoção ou alteração de um produto por um admin, onde uma imagem deve ter 512x512. 

### Informações armazenadas no Servidor

#### Contas
- CPF
- Nome
- Foto
- Telefone
- Celular
- Endereço
- E-mail
- Senha

#### Produtos
- ID
- Título
- Categoria
- Preço
- Descrição
- Imagem
- Quantidade Disponível
- Quantidade Vendida

## 3. Comentários sobre o código
Utilizamos VUE de modo a modularizar o código do nosso projeto e bootstrap para facilitar alguns detalhes da aparência. Vale ressaltar também que o nosso código não provê nenhum tipo de segurança aos usuários. 

## 4. Plano de teste
Todas as funcionalidades e ferramentas do site, tanto por parte do usuário quanto pelo administrador, foram testadas no navegador Google Chrome e Mozilla Firefox, utilizando os sistemas operacionais Windows 10/11 e Linux Ubuntu 20.04.4. 

#### Usuário
- Cadastro, login e alteração de informações pessoais
- Filtragem e registro de produtos no carrinho
- Compra 

#### Administrador
- Cadastro, remoção ou alteração de produtos

## 5. Resultados dos testes
Os resultados foram promissores, de tal forma que não encontramos nenhum tipo de inconsistência em nenhum dos navegadores ou sistemas operacionais. 

## 6. Building
Primeiramente, é necessário instalar os pacotes `npm` e `node.js` no computador. 

Após isso, basta baixar nosso repositório, extrair em algum lugar e entrar na pasta cool-glasses. Depois seguir os passos:

#### Primeiramente, digite:
`$ node ./server/main.js ` Essa instrução conctará o site ao banco de dados

#### Segundamente, digite: 
`$ npm run serve` Essa para rodar o servidor em localhost

Se tudo ocorrer bem, você poderá entrar no site, acessando a home em: http://localhost:8080/ 

## Páginas:
### Home
![image](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/d37c7e60-fe49-48c2-b48b-191dcd8073ef)

### Produtos em Alta:
![image](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/fe3d9556-8d6a-43cc-b646-a0934838870c)

### Produto
![image](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/e4fecadf-8d89-4586-b62f-30eedf811c15)

### Admin
![image](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/c288a179-a969-449d-90e7-0d0cffedfdcc)

### Usuário
![image](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/215ddbcb-e674-4519-93d6-dd5c0b0b2a1c)

## Add produtos no estoque
![image](https://github.com/thiagohsc21/CoolGlasses/assets/44558872/f466ca8b-7a5b-49fb-a90c-6f5e6903737b)

## Produtos
## 7. Problemas
No início, tivemos problemas na passagem dos Mockups para as telas, porque não sabíamos muito bem como trabalhar com o CSS e Bootstrap, de modo a alinhar itens e divs, trabalhar com o tamanho das fontes e cores. 

No momento de criarmos uma Single Page Application, também encontramos outros desafios, pois não sabíamos nada sobre o assunto e nem por onde começar. Tivemos que aprender sobre VUE em pouco tempo de modo a realizar a tarefa. 

Ao integrarmos todo o site com o mongoDB, também tivemos que aprender diversas funcionalidades, o que tomou certo tempo.

Concluindo, o desenvolvimento do projeto como um todo foi bem cansativo, pois não possuíamos nenhum tipo de conhecimento em Web e o nível requerido para a tarefa era, de certa forma, alto, o que demandou um tempo extremamente alto dedicado à disciplina.


## 8. Comentários

Agradecemos ao professor Dilvan e especialmente às monitoras Mariany morais e Débora Buzon por toda colaboração durante o desenvolvimento do projeto
