## 📝 Aula 02: TypeScript para Angular
### Como Rodar código TypeScript
Para rodar código TypeScript, você pode usar o tsc para compilar o código TypeScript em JavaScript e depois executar o arquivo JavaScript gerado com o node .

Dentro projeto, vamos criar um arquivo chamado ``index.ts`` e iremos incluir um código de teste nele:
```
type heroi = {
    nome: String;
    vulgo: String;
}

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}

printaObjeto({
    nome: "Bruce Wayne",
    vulgo: "Batman",
})
```

Após o passo anterior vamos executar o código abaixo para compilar o código ts para js. 
```
npx tsc index.ts
```
Ao excutar esse comando o código ts será traduzido para javascript, criando assim um novo arquivo chamado ``index.js``, com o código interno neste formato.
```
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    nome: "Bruce Wayne",
    vulgo: "Batman",
});
```
A principal diferença entre o código TypeScript e o código JavaScript gerado é a remoção das anotações de tipo. No código TypeScript, onde definimos um tipo heroi com as propriedades nome e vulgo do tipo String. Também especificamos que o parâmetro pessoa da função printaObjeto deve ser do tipo heroi.

No entanto, essas anotações de tipo são usadas apenas durante o desenvolvimento e não são necessárias em tempo de execução. Portanto, quando o código TypeScript é compilado para JavaScript, essas anotações de tipo são removidas. Isso resulta no código JavaScript gerado, onde a definição do tipo heroi e a anotação de tipo do parâmetro pessoa foram removidas.