
const path = require("path");
//External 
const express = require("express");
const storeRouter = require("./routes/storeRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./utils/PathUtil")
const errorController = require('./controllers/error')
const app = express();

// Ejs pakage
app.set('view engine' , 'ejs');
app.set('views' , 'views')

app.use(express.urlencoded({ extended: false }));
app.use(storeRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,"public")))

app.use(errorController.error)

const PORT = 3000;
// listen port
app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})