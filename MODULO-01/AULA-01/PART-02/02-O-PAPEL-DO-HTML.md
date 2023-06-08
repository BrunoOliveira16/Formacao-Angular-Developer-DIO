## 📝 Aula 01: Trabalhando com Web Components no Front-end
### O Papel do HTML
Dando continuidade no nosso desafio de criar um componente com nossas próprias tag's html, foi criado esse código inicial em HTML da estrutura base do componente.

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Component</title>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card__left">
                <span>Bruno Oliveira</span>
                <h1>Darth Vader Contrata Devs</h1>
                <p>Darth Vader procura desenvolvedores que sabem trabalhar com componentes</p>
            </div>
            <div class="card__right">
                <img src="./images/asset-vader.png" alt="imagem do darth vader">
            </div>
        </div>
    </div>
</body>
</html>
```

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.