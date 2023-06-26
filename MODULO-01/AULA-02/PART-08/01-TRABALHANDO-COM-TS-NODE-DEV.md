## 📝 Aula 02: TypeScript para Angular
### Trabalhando com TS Node Dev
TS Node Dev é uma versão modificada do node-dev que usa o ts-node por baixo dos panos. Ele reinicia o processo do node quando qualquer um dos arquivos necessários é alterado (como o node-dev padrão), mas compartilha o processo de compilação do TypeScript entre as reinicializações. Isso aumenta significativamente a velocidade de reinicialização em comparação com variações como ``node-dev -r ts-node/register`` ou ``nodemon -x ts-node``, porque não há necessidade de instanciar a compilação do ts-node a cada vez 1.

Para usar o TS Node Dev, você pode instalá-lo como uma dependência de desenvolvimento em seu projeto usando:
```
npm install ts-node-dev -D
```

TS Node Dev possui várias opções e flags que podem ser usadas para personalizar seu comportamento.
```
// Arquivo tsconfig.json

"scripts": {
    "start": "npx tsc && node build/index.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```

Este é um exemplo de como usar o TS Node Dev com opções ou flags para personalizar seu comportamento. No exemplo, o script ``start:dev`` usa o TS Node Dev para executar o arquivo ``src/index.ts``. Ele passa duas opções para o TS Node Dev: ``--respawn`` e ``--transpile-only``.

A opção ``--respawn`` indica ao TS Node Dev para reiniciar automaticamente o processo do node quando qualquer um dos arquivos necessários for alterado. Isso permite que você veja as alterações em seu código imediatamente sem precisar reiniciar manualmente o processo.

A opção ``--transpile-only`` indica ao TS Node Dev para usar apenas a transpilação do TypeScript sem realizar a verificação de tipo. Isso pode acelerar significativamente o processo de reinicialização, especialmente em projetos grandes. No entanto, observe que isso significa que erros de tipo não serão detectados durante a execução do TS Node Dev. É recomendável usar uma ferramenta separada (como o próprio compilador TypeScript) para verificar os tipos em seu código durante o desenvolvimento.