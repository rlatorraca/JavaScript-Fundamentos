// Classes no JS SEMPRE serao convetidas em OBJETOS
class Matematica {
    static somar(valor1, valor2) {
        return valor1 + valor2
    }

    static multiplicar(valor1, valor2) {
        return valor1 * valor2
    }
}


// Faz com que com a Classe Matematica seja EXPOSTA / PUBLICO
module.exports = Matematica