const app = require('./app');
const http = require('http');



const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT,function(err){
    if(err) console.log(err);
    console.log(`Running on port ${PORT}`);
})