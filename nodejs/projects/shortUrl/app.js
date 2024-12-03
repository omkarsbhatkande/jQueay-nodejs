//External module
const express =require('express');
const path = require('path');
const cookieParser = require('cookie-parser')

//app 
const app = express();

// local modules
const URL = require('./models/url')


const urlRouter = require('./routes/url');
const staticRoutes = require('./routes/staticRouter')
const userRoute = require('./routes/user')
const connectToMongoose= require('./connect');
const {restBreakToLoggedinUserOnly , checkAuth} = require('./middlewares/auth')
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
app.use(cookieParser())

// connection
connectToMongoose('mongodb://localhost:27017/short-url')
.then(()=> console.log("db connected"))


// Routes
app.use('/url' ,restBreakToLoggedinUserOnly, urlRouter);
app.use('/user' , userRoute);
app.use('/',checkAuth,staticRoutes)





// app.get('/test',async(req,res)=>{
//   const allUrls = await URL.find({})
//   //console.log(allUrls);  
//   return res.render('home',{title:'Home page',urls:allUrls})
// })



app.get('/:shortId' ,async (req,res)=>{
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
    shortId
  }
  ,{
    $push:{
    visitHistory:{
      timeStamps:Date.now()
    },
  }
})
  res.redirect(entry.redirectURL)
})

