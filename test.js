//Como fazer um teste

//Um teste será feito abaixo do outro, ao  retornar o erro a leitura para

function assert(value){
  if (!value) {  throw new Error('Invalid value') }
}

//Caso  verdadeiro
console.log('Testing 1 === 1')
assert(1 === 1)

//Caso  verdadeiro
console.log('Testing true')
assert(true)

//Caso  falso
console.log('Testing 1 === 1')
assert(1 === 2)

//Uma função pode ser declarada depois do teste pois ela tem  prioridade na exucução
console.log('Testing sqr()')
assert(sqr(4) === 16)

//Uma função pode ser declarada depois do teste pois ela tem prioridade na execução
function sqr(number) { return number * number}