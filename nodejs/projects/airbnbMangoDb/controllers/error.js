exports.error = (req,res,next)=>{
  //res.status(404);
  res.render('404',{pageTitle:'page not found',currentPage:'404'}) 
}