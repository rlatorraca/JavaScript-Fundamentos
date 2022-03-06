const heroi = {
    
    /* JSON - Java Script Objet notation */
    // Key : valeu
    
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

console.log( 'nome', heroi.nome)
console.log('idade', heroi['idade'])
console.log('sexo', heroi.sexo)
console.log('naoExiste', heroi.naoExiste)
heroi.id = 0001
console.log(heroi)
heroi.naoExiste = 'Nao existe valor';

// Mostra chaves
console.log('Object.keys(heroi)' ,Object.keys(heroi))

// <> Mostra valores
console.log('Object.values(heroi)', Object.values(heroi))

// <> Juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}
const novoObj = Object.assign(heroi, pessoa)
console.log('novoObj', novoObj)
delete novoObj.nome
console.log('delete novoObj.nome', novoObj)

