/*
* Formulario para envio de dados
*/

document.getElementById('formulario-02').addEventListener('submit', function(evento) {

    evento.preventDefault();
    evento.stopPropagation();

    console.log(evento)
    document.getElementById('resultado-01').innerHTML = "Seu Cadastro foi enviado";

});

/*
* Função para identificar campo vazio e gerar alarme para o usuário
*/
function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Campo obrigatório em branco, Favor preencha o campo";
            this.classlist.add('.erro');
            this.parentNode.classlist.add('.erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML =  "";
            this.classlist.remove('.erro');
            this.parentNode.classlist.remove('.erro');
        }

    });

}


function validaCEP(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const CEPValido = /^[0-9]{5}-[0-9]{3}$/

        if(this.value.match(CEPValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classlist.remove('.erro');
            this.parentNode.classlist.remove('.erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "CEP inválido, favor digitar novamente";
            this.classlist.add('.erro');
            this.parentNode.classlist.add('.erro');
            return false;
        }
    });

}

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classlist.remove('.erro');
            this.parentNode.classlist.remove('.erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "E-mail inválido, favor digitar novamente";
            this.classlist.add('.erro');
            this.parentNode.classlist.add('.erro');
            return false;
        }

    });
}

function validaUf(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const ufValido = /[A-Z]{2}/;
        if(this.value.match(ufValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classlist.remove('.erro');
            this.parentNode.classlist.remove('.erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Estado incorreto, favor digitar novamente";
            this.classlist.add('.erro');
            this.parentNode.classlist.add('.erro');
            return false;
        }

    });
}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposCEP = document.querySelectorAll('input.CEP');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for(let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for(let emFoco of camposCEP) {
    validaCEP(emFoco);
}

for(let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for(let emFoco of camposUf) {
    validaUf(emFoco);
}