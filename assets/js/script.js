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

    tiposDeErro.forEach((erro) => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.nome][erro];
            console.log(mensagem);
        }
    })

    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
    //parentNode faz ir só específico
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput){
        mensagem.textContent = mensagem;
    } else{
        mensagem = "";
    }
}




