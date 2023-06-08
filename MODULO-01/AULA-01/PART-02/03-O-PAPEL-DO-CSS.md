## 📝 Aula 01: Trabalhando com Web Components no Front-end
### O Papel do CSS
Dando continuidade no nosso desafio de criar um componente com nossas próprias tag's html, foi criado esse código inicial em CSS para o nosso componente, utilizamos o recurso do site css generator para gerar box-shadow, link abaixo.

Foi alterado a tag ``h1`` dentro de ``.card__left`` para tag ``a``.

Link CSS generator: https://cssgenerator.org/box-shadow-css-generator.html

```
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
}

.container {
    max-width: 1080px;
    width: 100%;
    padding: 32px;
    margin: 0 auto;
}

.card {
    width: 80%;
    box-shadow: 9px 9px 26px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 9px 9px 26px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 26px 0px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.card__left > span {
    font-weight: 400;
}

.card__left > a {
    margin-top: 15px;
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.card__left > p {
    color: rgb(70,70,70);
}

.card__right > img {
    width: 100%;
    height: 100%;
}
```

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.