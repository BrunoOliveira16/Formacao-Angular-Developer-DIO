## 📝 Aula 02: TypeScript para Angular
### Instalando o Typescript Localmente
Para instalar o TypeScript localmente, você precisa seguir os seguintes passos:

1. Primeiramente, é necessário ter o ``Node.js`` instalado em seu ambiente.

2. Crie uma pasta para o projeto, e aplique o comando abaixo no terminal dentro do diretório do projeto para criar o arquivo ``package.json``. OBS: criamos uma pasta chamada ``primeiro-projeto``
```
npm init
```

3. Para instalar o typescript com uma dependencia de desenvolvimento execute o comando abaixo:
```
npm install typescript -D
```

> Note que ao instalar o typescript com o comando acima, será criada uma dev-dependencia no arquivo package.json:

```
"devDependencies": {
    "typecript": "^0.0.1-security"
  }
```