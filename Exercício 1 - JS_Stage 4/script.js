let number1 = Number(prompt("Digite o primeiro número: "))
let number2 = Number(prompt("Digite o segundo número: "))


function calculate() {
    let sum = number1 + number2
    alert(`A soma dos dois números é: ${sum}`)
    let sub = number1 - number2
    alert(`A subtração dos dois números é: ${sub}`)
    let mult = number1 * number2
    alert(`A multiplicação dos dois números é: ${mult}`)
    let div = number1 / number2
    alert(`A divisão dos dois números é: ${div}`)
    let divRest = number1 % number2
    alert(`O resto da divisão dos dois números é: ${divRest}`)
    
    if(sum % 2 === 0) {
        alert(`A soma dos dois números é par: ${sum}`)
    } else {alert(`A soma dos dois números é ímpar: ${sum}`)}
    
    if(number1 === number2) {
        alert("Os números inseridos são iguais.")
    } else {alert("Os números inseridos são diferentes.")}
}

calculate()