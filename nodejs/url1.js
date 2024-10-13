const http = require('http');



const server = http.createServer((request, response)=>{ 
  console.log(request.url, request.method, request.headers);

  if(request.url === '/'){
    response.setHeader('Content-Type','text/html');
    response.write('<h1>home page</h1>');
    response.end();
  }else if (request.url === '/about'){
    response.setHeader('Content-Type','text/html');
    response.write('<h1>about page</h1>');
    response.end();
  }else{
    response.writeHead(404,{'Content-Type':'text/html'});
    response.end('<h1>page not found</h1>');
  }
})


server.listen(3000,(req,res)=>{
  console.log(`server is running on port ${3000}`);
})