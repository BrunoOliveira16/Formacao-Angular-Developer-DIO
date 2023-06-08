## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Criando o Style do Seu Component
Nesta etapa adicionamos o CSS de forma isolada no nosso componente, através do método styles:
```
 styles() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
            width: 80%;
            height: 200px;
            margin-bottom: 32px;
            box-shadow: 9px 9px 26px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 26px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 26px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left {
            width: 60%;
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

        .card__right {
            width: 40%;
        }
        
        .card__right > img {
            width: 100%;
            height: 100%;
        }
    `;

    return style;
}
```

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.