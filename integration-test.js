//INTEGRATION TEST
//Quando tem  um  API se comunicando via HTTP, TCP, transmitindo dados

// ~~~Terminal
// vi server.test.js
// node server.test.js
// ~~~

//Escrever no server.test.js

const  http = require('http')
const assert = require('assert')

http.request('http://localhost.com/3000', (res) => {
        const chunks = []
        res.on('data', (chunk) => chunks.push(chunk))

        res.on('end', () => {
          const body = chunks.join('')

          console.log(body)

          console.log('Testing integration with localhost:3000 === Hello World')
          assert(body === 'Hello World')
        })
      }).end()

//Finalizar a  requisição
//request.end()

