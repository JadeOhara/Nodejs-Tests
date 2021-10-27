const http = require('http')

http.createServer((req, res) => {
  res.end('Hello World')
}).listen(3000)

//PRA  RODAR
//~~~terminal
//node http-server.js
//curl http://localhost:8000
//~~~
//Retorna o valor sempre que chamado
