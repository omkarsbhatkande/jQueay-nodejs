const http = require('http');


const server = http.createServer((request, response)=>{
  // console.log(request.url, request.method, request.headers);

  
  response.setHeader('Content-Type','text/html');
   response.write('<html>');
   response.write('<head><title>form</title></head>');
   response.write('<body>');
   response.write('<form action="/message" method="POST">');
   response.write('<input type="text" name="name" placeholder="enter your name">');
   response.write('<input type="text" name="email" placeholder="enter your email">');
   response.write('<input type="text" name="message" placeholder="enter your message">');
   response.write('<button type="submit">send</button>');
   response.write('</form>');
   response.write('</body>');
   response.write('</html>');
    response.end();
  

})


PORT = 3000;

server.listen(PORT,(req,res)=>{
  console.log(`server is running on port ${PORT}`);
})