//External module
const express =require('express');
const path = require('path');

//app 
const app = express();

// local modules
const URL = require('./models/url')
const urlRouter = require('./routes/url');
const connectToMongoose= require('./connect');
const staticRoutes = require('./routes/staticRouter')

//ejs support
app.set('view engine','ejs');
app.set('views' ,path.resolve('./views'));


//listen port
const PORT = 3000;
app.listen(PORT,(req,res)=>{
  console.log(`Server is running on ${PORT} Port.`);
})

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// connection
connectToMongoose('mongodb://localhost:27017/short-url')
.then(()=> console.log("db connected"))


// Routes
app.use('/url' , urlRouter);

app.get('/test',async(req,res)=>{
  const allUrls = await URL.find({})
  //console.log(allUrls);
  
  return res.render('home',{title:'Home page',urls:allUrls})
})


app.use('/',staticRoutes)




app.get('/:shortId' ,async (req,res)=>{
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId
  },{$push:{
    visitHistory:{
      timeStamps:Date.now()
    },
  }})
  //res.redirect(entry.redirectURL)
})

