class Heroi {
    atacar(){
        console.log(`atacou!!`)
    }
    defender() {
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando construtor!

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade 
    }

    atacar() {
        console.log(
            `O ${this.nome} atacou!!`
        )
    }
}
const heroi2 = new Heroi2(
    `Flash`, 80
)
heroi2.atacar()


class Heroi3 {
    static obterAnoNascimento(idade) {
        const date = new Date()
        const yearBirthday = date.getFullYear() - idade
        return `${idade} anos, nasceu no ano ${yearBirthday}`
            

    } 
}
const anoNascimento = Heroi3.obterAnoNascimento(456)
console.log(
    `O ano de nascimento do Heroi para um pessoa com ${anoNascimento}`
)
