// Funções para o funcionamento da calculadora
const botao = document.querySelectorAll(".numeros");

botao.forEach((botao) => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;
        const display = document.querySelector(".display");
        display.value += valor;
    });
});

// Multiplicação
const multiplicar = document.querySelector(".multiplicar");

multiplicar.addEventListener("click", () => {
    const display = document.querySelector(".display");
    const valor = display.value;
    display.value = "";
    display.value += valor + "*";
});

// Divisão
const dividir = document.querySelector(".dividir");

dividir.addEventListener("click", () => {
    const display = document.querySelector(".display");
    const valor = display.value;
    display.value = "";
    display.value += valor + "/";
});

// Porcentagem
const porcentagem = document.querySelector(".porcent");

porcentagem.addEventListener("click", () => {
    const display = document.querySelector(".display");
    const expressao = display.value;

    const operadorPos = expressao.indexOf("*");

    if (operadorPos !== -1) {
        const primeiroNumero = parseFloat(expressao.slice(0, operadorPos));
        const segundoNumero = parseFloat(expressao.slice(operadorPos + 1));

        if (!isNaN(primeiroNumero) && !isNaN(segundoNumero)) {
            const resultado = (primeiroNumero * segundoNumero) / 100;
            display.value = resultado;
        } else {
            display.value = "Erro";
        }
    } else {
        display.value = "Erro";
    }
});

// Raiz quadrada
const raiz = document.querySelector(".raiz");

raiz.addEventListener("click", () => {
    const display = document.querySelector(".display");
    const expressao = display.value;
    const resultado = Math.sqrt(expressao);
    display.value = resultado;
});

// Função para Limpar o display
function limpar() {
    document.querySelector(".display").value = "";
}

// Função para o resultado
function resultado() {
    try {
        const display = document.querySelector(".display");
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Erro";
    }
}

// Função para permitir apenas números
const display = document.querySelector(".display");

display.addEventListener("input", () => {
    const valor = display.value;
    const valorPermitido = valor.replace(/[^0-9*/+.\-]/g, '');
    if (valor !== valorPermitido) {
        display.value = valorPermitido;
    }
});

// Função para dar resultado com o Enter
display.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        resultado();
    }
});

