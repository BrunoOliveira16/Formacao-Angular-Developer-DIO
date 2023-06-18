## 📝 Aula 02: TypeScript para Angular
### Criando e configurando o arquivo TSConfig
O arquivo tsconfig.json é usado para configurar as opções do compilador TypeScript para um projeto 1. Para criar um arquivo tsconfig.json, você pode simplesmente criar um novo arquivo com esse nome na raiz do seu projeto e adicionar as configurações desejadas ou executar o comando abaixo no terminal:
```
npx tsc --init
```

As configurações básicas podem incluir a especificação dos arquivos raiz e as configurações de compilação necessárias para o projeto. Você também pode estender outras configurações básicas, como @tsconfig/node12/tsconfig.json para projetos Node.js na versão 12 ou mais recente.

Você pode encontrar mais informações sobre como criar e configurar o arquivo tsconfig.json na documentação oficial do TypeScript: https://www.typescriptlang.org/pt/docs/handbook/tsconfig-json.html

Após criar arquivo, iremos realizar algumas modificações dentro do arquivo, definindo diretório de entrada e saida:
```

```
/* Modules */
    "module": "commonjs",                            /* Specify what module code is generated. */
    "rootDir": "./src",   

/* Emit */
"outDir": "./build",                                 /* Specify an output folder for all emitted files. */ 
```

Crie essas pastas dentro do projeto e execute o comando abaixo:
```
npx tsc
```