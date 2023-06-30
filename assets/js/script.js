const inputsFormulario = document.querySelectorAll("[required]");

inputsFormulario.forEach( (campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", (e) => e.preventDefault());
})

const tiposDeErro = [
    'valueMissing', 
    'typeMismatch', 
    'patternMismatch', 
    'tooShort', 
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },

    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
    },
};

function verificaCampo (campo){
    let mensagem = "";

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.nome][erro];
            console.log(mensagem);
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    //parentNode serve para pegar o irmão que está do lado tag, pq senão pegaria todos os spans
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem;
    } else{
        mensagemErro.textContent = "";
    }
}

let inputs = document.querySelectorAll("contato__input");
let textarea = document.querySelector(".contato__textarea");
let button = document.querySelector(".contato__button");

// function verificarInputs() {
//     let todosPreenchidos = true;

//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].value && textarea.value === "") {
//         todosPreenchidos = false;
//         break;
//         }
//     }

//     button.disabled = !todosPreenchidos;
// }








