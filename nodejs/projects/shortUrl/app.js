const express =require('express');

const urlRouter = require('./routes/url');
const connectToMongoose= require('./connect');


const app = express();

const PORT = 3000;

app.listen(PORT,(req,res)=>{
  console.log(`Server is running on ${PORT} Port.`);
})

app.use(express.json());

// connection
connectToMongoose('mongodb://localhost:27017/short-url')
.then(()=> console.log("db connected"))


// Routes
app.use('/url' , urlRouter);

