let peso = document.getElementById('rangekg')
let respeso = document.getElementById('respeso')
let imcres = document.getElementById('imc')

let mostrarPeso = () => {
    respeso.textContent = peso.value
    imcres.innerHTML = ''  //Apaga a resposta da caixa do imc
    imcres.style.boxShadow = 'none' //Remove a sombra da caixa de resposta
}
peso.oninput = () => {
    mostrarPeso()
}
mostrarPeso()

let alt = document.getElementById('rangealt')
let resalt = document.getElementById('resalt')

let mostrarAlt = () => {
    resalt.textContent = alt.value
    imcres.innerHTML = ''
    imcres.style.boxShadow = 'none'
}
alt.oninput = () => {
    mostrarAlt()
}
mostrarAlt()

function calcular(){
    let alt2 = Number(alt.value)
    let peso2 = Number(peso.value)
    let imcsem =  peso2 / (alt2/100)**2
    let imc = imcsem.toFixed(2)

    if (imc < 18.5){
        imcres.style.boxShadow ='0 0 5px rgb(236, 233, 57, 0.568)'
        imcres.style.color= 'rgb(236, 233, 57)'
        imcres.innerHTML = `IMC de ${imc} pontos; Peso Baixo.`
    } else if(imc < 25){
        imcres.style.boxShadow ='0 0 5px rgb(31, 223, 24, 0.568)'
        imcres.style.color = 'rgb(31, 223, 24)'
        imcres.innerHTML = `IMC de ${imc} pontos; Peso Normal.`
    } else if (imc < 30){
        imcres.style.boxShadow ='0 0 5px rgb(214, 142, 7, 0.568)'
        imcres.style.color = 'rgb(214, 142, 7)'
        imcres.innerHTML = `IMC de ${imc} pontos; Sobrepeso.`
    } else {
        imcres.style.boxShadow ='0 0 5px rgb(255, 38, 0, 0.568)'
        imcres.style.color = 'rgb(255, 38, 0)'
        imcres.innerHTML = `IMC de ${imc} pontos; Obesidade.`
    }
}
