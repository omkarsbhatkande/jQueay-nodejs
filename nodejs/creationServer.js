const http = require('http');



const server = http.createServer((request, response)=>{
  console.log(request);
})

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})