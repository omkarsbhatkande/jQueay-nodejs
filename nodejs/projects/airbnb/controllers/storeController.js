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




