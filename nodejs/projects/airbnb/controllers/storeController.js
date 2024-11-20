const Home = require("../models/home");



exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render("store/home-list", {
     registeredHomes: registeredHomes,
     pageTitle: "airbnb Home",
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


exports.getBookings =(req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })

// console.log(registeredHomes);
};




