let peso = document.getElementById('rangekg')
let respeso = document.getElementById('respeso')
let alt = document.getElementById('rangealt')
let resalt = document.getElementById('resalt')
let imcres = document.querySelector('.imc')

let resultado = document.querySelector('.resultado')

peso.oninput = () => {
    respeso.textContent = `Peso: ${peso.value} kg`

    calcular()
}

alt.oninput = () => {
    resalt.textContent = `Altura: ${alt.value} cm`

    calcular()
}

function calcular() {
    let alt2 = Number(alt.value)
    let peso2 = Number(peso.value)
    // Formula imc = peso / altura^2
    let imcsem = peso2 / (alt2 / 100) ** 2
    // toFixed(2) com duas casas decimais depois da virgula
    let imc = imcsem.toFixed(2)

    imcres.classList.remove('esconder')

    if (imc < 18.5) {
        // Deixa na cor amarela
        imcres.innerHTML = `IMC de ${imc} pontos; Peso Baixo.`
        resultado.className = 'pesobaixo'
    } else if (imc < 25) {
        // Deixa na cor verde
        imcres.innerHTML = `IMC de ${imc} pontos; Peso Normal.`
        resultado.className = 'pesonormal'
    } else if (imc < 30) {
        // Deixa na cor laranja
        imcres.innerHTML = `IMC de ${imc} pontos; Sobrepeso.`
        resultado.className = 'pesoacima'
    } else {
        // Deixa na cor vermelha
        imcres.innerHTML = `IMC de ${imc} pontos; Obesidade.`
        resultado.className = 'pesoobesidade'
    }
}
