function converter() {
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let escalaOrigem = document.getElementById("escalaOrigem").value;
    let escalaDestino = document.getElementById("escalaDestino").value;
    let resultado;

    if (escalaOrigem === "Celsius") {
        if (escalaDestino === "Fahrenheit") {
            resultado = (temperatura * 9/5) + 32;
        } else if (escalaDestino === "Kelvin") {
            resultado = temperatura + 273.15;
        }
    } else if (escalaOrigem === "Fahrenheit") {
        if (escalaDestino === "Celsius") {
            resultado = (temperatura - 32) * 5/9;
        } else if (escalaDestino === "Kelvin") {
            resultado = (temperatura - 32) * 5/9 + 273.15;
        }
    } else if (escalaOrigem === "Kelvin") {
        if (escalaDestino === "Celsius") {
            resultado = temperatura - 273.15;
        } else if (escalaDestino === "Fahrenheit") {
            resultado = (temperatura - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("resultado").innerHTML = resultado.toFixed(2);
}