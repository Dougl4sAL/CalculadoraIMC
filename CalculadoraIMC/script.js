let peso = document.getElementById('rangekg')
let respeso = document.getElementById('respeso')
let alt = document.getElementById('rangealt')
let resalt = document.getElementById('resalt')
let imcres = document.querySelector('.imc')

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
        imcres.style.boxShadow = '0 0 5px rgb(236, 233, 57, 0.568)'
        imcres.style.color = 'rgb(236, 233, 57)'
        imcres.innerHTML = `IMC de ${imc} pontos; Peso Baixo.`
    } else if (imc < 25) {
        imcres.style.boxShadow = '0 0 5px rgb(31, 223, 24, 0.568)'
        imcres.style.color = 'rgb(31, 223, 24)'
        imcres.innerHTML = `IMC de ${imc} pontos; Peso Normal.`
    } else if (imc < 30) {
        imcres.style.boxShadow = '0 0 5px rgb(214, 142, 7, 0.568)'
        imcres.style.color = 'rgb(214, 142, 7)'
        imcres.innerHTML = `IMC de ${imc} pontos; Sobrepeso.`
    } else {
        imcres.style.boxShadow = '0 0 5px rgb(255, 38, 0, 0.568)'
        imcres.style.color = 'rgb(255, 38, 0)'
        imcres.innerHTML = `IMC de ${imc} pontos; Obesidade.`
    }
}
