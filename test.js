//Como  testar

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


