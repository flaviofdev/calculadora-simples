const display = document.getElementById("display");

function anexarAoDisplay(input) {
    display.value += input;
}

function limparDisplay() {
    display.value = "";
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Inválido.";
    }

}