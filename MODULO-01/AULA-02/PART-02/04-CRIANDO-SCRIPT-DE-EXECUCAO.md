## 📝 Aula 02: TypeScript para Angular
### Criando um script de execução
Você pode criar um script de execução para seu projeto TypeScript adicionando um script ao arquivo ``package.json`` do seu projeto. Por exemplo, você pode adicionar um script chamado ``start`` que compila e executa seu código TypeScript da seguinte maneira:
```
"scripts": {
    "start": "npx tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Neste exemplo, o script ``start`` primeiro executa o comando ``tsc`` para compilar o código TypeScript em JavaScript e, em seguida, executa o arquivo JavaScript gerado com o node. Observe que você deve substituir ``build/index.js`` pelo caminho para o arquivo JavaScript gerado pelo compilador TypeScript.

Depois de adicionar o script ao seu arquivo package.json, você pode executá-lo com o comando abaixo. Isso executará os comandos especificados no script start e iniciará seu aplicativo.
```
npm run start
```