//UNIT TEST
//Testar uma unidade do  sistema

//Importe os código que você for testar
const sqr = require('./functions')

//O  node  tem  um  módulo chamado assert, incluindo validar boolean
//Ele irá retornar um objeto falando sobre o erro
const assert = require('assert')

//Teste  feito pra unidade a ser testada
console.log('Testing sqr() gets the right value')
assert(sqr(4) === 16)

//Teste  feito pra unidade a ser testada
console.log('Testing sqr() dont get the wrong')
assert(sqr(4) !== 15)




