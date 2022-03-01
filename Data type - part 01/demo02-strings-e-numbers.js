let salarioDoAmigo = 1000
let meuSalario = "2999.14"
let salarioMeuPai = "1Milhao"
let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSalarioCorrigido)
console.log(
    typeof(salarioDoAmigo), 
    salarioDoAmigo
)
console.log(
    typeof(meuSalario),
    meuSalario
)

console.log(
    isNaN(meuSalario),
    isNaN(meuSalarioCorrigido),
    isNaN(salarioMeuPai)
)


let minhaString = 'Olá mundo!'
let minhaOutraString = "Olá mundo2"
let minhaStringComVariaveis = 
`${minhaString} - ${minhaOutraString}. AE!`

console.log(
    minhaStringComVariaveis
)