const fs = require('fs');



fs.writeFile('hello.txt','hello world',(error)=>{
 if(error){
  console.log(errpr);
  
 }
 else{
  console.log("file created");
  
 }
})
