const http = require('http');



const server = http.createServer((request, response)=>{
  console.log(request.url, request.method, request.headers);

  if(request.url === '/'){
response.writeHead(200,{'Content-Type':'text/html'});
response.end('<h1>home page</h1>');
  }
  else if (request.url === '/about'){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>about page</h1>');
  }else{
    response.writeHead(404,{'Content-Type':'text/html'});
    response.end('<h1>page not found</h1>');
  }

})


server.listen(3000,(req,res)=>{
  console.log(`server is running on port ${3000}`);
})