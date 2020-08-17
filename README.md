Dragon

Instalação Manual

Clonar a aplicação
git clone https://github.com/pietromarinho/dragon-list-angular

cd dragon-list-angular

Instale pacotes npm

Instale os pacotes npm descritos no package.json e verifique se funciona:

npm install
npm start
O comando npm start constrói (compila TypeScript e copia ativos) o aplicativo em dist / e observa as alterações nos arquivos de origem.
Desligue-o manualmente com Ctrl-C.

scripts npm
Estes são os comandos mais úteis definidos em package.json:

npm start - executa o compilador TypeScript, a copiadora de ativos e um servidor ao mesmo tempo, todos os três no "modo de observação".
npm run build - executa o compilador TypeScript e a copiadora de ativos uma vez.
npm run build: watch - executa o compilador TypeScript e a copiadora de ativos no "modo de observação"; quando ocorrerem alterações nos arquivos de origem, eles serão recompilados ou copiados para dist /.
npm run lint - executa o tslint nos arquivos do projeto.
Estes são os scripts relacionados ao teste:

npm test - constrói o aplicativo e executa os testes Intern (tanto unitários quanto funcionais) uma vez.
npm run ci - limpa, lints e constrói o aplicativo e executa testes Intern (tanto unitários quanto funcionais) uma vez.