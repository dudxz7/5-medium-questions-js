function desconto(){
    let valor = +document.querySelector("#valor").value
    let porcem = +document.querySelector("#valor2").value
    let calculo = (porcem/100 * valor) 
    let valor_final = valor - calculo
    let resultado = document.querySelector("#resultado").innerHTML = "Você aplicou um desconto de " + porcem + "% porcento ao seu produto." + " O resultado final da compra é de " + "R$" + valor_final + " reais" 
}
function acres(){
    let valor = +document.querySelector("#valor").value
    let porcem = +document.querySelector("#valor2").value
    let calculo = (porcem/100 * valor) 
    let valor_final = valor + calculo
    let resultado = document.querySelector("#resultado").innerHTML = "Você aplicou um acréscimo de " + porcem + "% porcento ao seu produto." + " O resultado final da compra é de " + "R$" + valor_final + " reais"
}