## Abrindo o projeto (Baseado no uso do VS Code)

1. Baixar o projeto
2. Abrir VS Code 
3. Clicar em "File"
4. Clicar em "Open Folder"
5. Selecionar a pasta raiz do projeto
6. Clicar em "OK"

## Tecnologias utilizadas no projeto

- Cypress 11.2.0 (comando para instalação no terminal: "npm install cypress@^11.2.0 -save-dev");
- IDE de desenvolvimento (Sugestão) - VS Code (https://code.visualstudio.com/download).

## Arquitetura:

A arquitetura padrão é composta por:
 
- `fixtures`: Pacote que contém os arquivos contendo objetos json para utilização nas requests;
- `integration`: Pacote que contém o arquivo de teste;
- `support`: Contém arquivos para realizar configurações e comandos personalizados caso necessário.

## Executando testes através do Cypress:
Para rodar os testes, siga os seguintes passos:
- Abra o terminal;
- Digite o comando "npx cypress open";
- Selecionar "E2E Testing";
- Selecionar o navegador a ser utilizado no teste;
- Selecionar o arquivo de teste desejado (exemplo: "api.cy.js") e aguardar a execução.