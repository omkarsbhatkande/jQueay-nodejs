const http = require('http');



const server = http.createServer((request, response)=>{
  console.log(request);

  if(request.url === '/'){
    response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>form</title></head>');
    response.write('<body>');
    response.write('<a href="/">home</a></a>');
    response.write('<a href="/about">about</a></a>');
    response.write('<a href="/contact">contact</a></a>');
    response.write('<a href="/women">women</a>');
    response.write('<a href="/men">men</a>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}

if(request.url === '/about'){
  response.setHeader('Content-Type','text/html');
  response.write('this is about page');
  response.end();
}

if(request.url === '/contact'){
  response.write('contact page');
  response.end();
}

if(request.url === '/women'){
  response.write('women page');
  response.end();
}

if(request.url === '/men'){
  response.write('men page');
  response.end();
}
  


});



server.listen(3000,(req,res)=>{
  console.log(`server is running on port 3000`);

});

