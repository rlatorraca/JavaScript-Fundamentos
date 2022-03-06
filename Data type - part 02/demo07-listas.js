const minhaLista = []
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

/* Uma posicao que nao existe na lista / vetor / matrix sera UNDEFINED */

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4])

// <> Quantidade de itens no array
// console.log(minhaListaDeTarefas.length)

// <> adicionar item - PUSH
minhaListaDeTarefas.push('formatar computador')
// console.log(minhaListaDeTarefas);

// <> Remover ultimo da lista - POP
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo, minhaListaDeTarefas)

// <> Remover o primeiro da lista - SHIFT
// const primeiro = minhaListaDeTarefas.shift()
// console.log(primeiro, minhaListaDeTarefas)

// <> Remover um item especifico a partir de um INDICE
// console.log(minhaListaDeTarefas[2])

// <> Qual item de inicio
// quantos remover
// 2 : é INDICE BASE (inicia dele)
// 1 : quantidade de elementos (no caso apenas 1 elemento)
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas);

// <> List com varios tipos diferentes
// Um ARRAY eh um OBJECT
const itens = [
    1, 'computador', 0.22
]

// verificar o tipo do array
console.log(typeof(itens))
console.log(typeof(minhaListaDeTarefas))

// verificar se é array da forma correta
// Como é um OBJECT temos saber se é um ARRAY
console.log(Array.isArray(itens))
console.log(Array.isArray(minhaListaDeTarefas))

// ordenar
const numeros = [ 'c', 'z', 'a', 'd']
console.log(numeros.sort())

// juntar dois arrays - CONCAT

// const novo = itens.concat([1,2,3])
// console.log(novo)

// juntar arrays em uma string
console.log(itens.join(','))
console.log(itens.join('-|-'))

// verificar indice do item
const index = itens.indexOf('computador')
console.log(itens[index])
