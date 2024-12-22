const Home = require("../models/home");
const Favourite = require("../models/favourite")


exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render("store/index", {
     registeredHomes: registeredHomes,
     pageTitle: "airbnb Home",
     currentPage: "index",
   })
 );
 // console.log(registeredHomes);
};


exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render("store/home-list", {
     registeredHomes: registeredHomes,
     pageTitle: "Home List",
     currentPage: "Home",
   })
 );
 // console.log(registeredHomes);
};


exports.getBookings =(req, res, next) => {
   res.render("store/bookings", {
     pageTitle: "My Bookings",
     currentPage: "bookings",
   })
 
 // console.log(registeredHomes);
};



exports.getFavouriteList =(req, res, next) => {
  Favourite.getFavourites(favourites =>{
    Home.fetchAll((registeredHomes) =>{
     const favouriteHomes= registeredHomes.filter(home =>favourites.includes(home.id));
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      })
  });
  })
};

exports.postAddToFavourite = (req,res,next)=>{
  Favourite.addToFavourite(req.body.id , error=>{
    if(error){
      console.log("error while marking error : " , error);
    }
    res.redirect("/favourites")
  })
}

exports.postRemoveFromFavourite = (req,res,next)=>{
  const homeId= req.params.homeId;
  Favourite.deleteById(homeId,err=>{
    if(err){
      console.log("error while removing",err); 
    }
    res.redirect("/favourites")
  })
}

exports.getHomeDetails = (req, res, next) => {
const homeId = req.params.homeId;
//console.log(homeId);
Home.findById(homeId, home=>{
  if (!home) {
    console.log("Home not Found");
    
    res.redirect("/homes");
  }
  //console.log("home details fond", home);
  else{
    res.render("store/home-detail", {
      home:home,
      pageTitle: "Home Detail",
      currentPage: "Home",
    })
  }
  
})

};




