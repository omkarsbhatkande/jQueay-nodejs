const Home = require("../models/home");



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
  Home.fetchAll((registeredHomes) =>
    res.render("store/favourite", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourite List",
      currentPage: "favourite-list",
    })
  );
};

exports.postAddToFavourite = (req,res,next)=>{
  console.log("came to add to favtes".req.body);
  
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




