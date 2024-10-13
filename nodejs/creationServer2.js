const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method,req.headers);
})


PORT = 3000;

server.listen(PORT,(req,res)=>{
  console.log(`server is running on port ${PORT}`);
})