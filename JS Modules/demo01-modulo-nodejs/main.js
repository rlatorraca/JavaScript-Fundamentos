// Importa o arquivo ./matematica
const Matematica = require('./matematica')

// Para ler ENTRADA DO TERMINAL
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin, // Entrada será feita no terminal
    output: process.stdout // Saida será feita no terminal
})

terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Qual operacao deseja fazer?\n', tipoOperacao => {
            const resultado = Matematica[tipoOperacao](Number(valor1), Number(valor2))
            console.log(
                `A operacao ${tipoOperacao} de ${valor1} por ${valor2} é ${resultado}`
            )
            terminal.close() // Serve para DESTRAVAR/LIBERAR o terminal
        })
    })
})
