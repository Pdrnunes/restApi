// Aqui serão incluídas as informações de serviços de transição http usando a bliblioteca express
const http = require('http');
const port = process.env.port || 3000 // Se PORT não estiver preenchida a porta padrão será a 3000
const app = require('./app') // exporta o app para o meu server
const server = http.createServer(app);
server.listen(port)