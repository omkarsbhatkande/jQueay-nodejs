const Home = require("../models/home");


exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add-home", currentPage: "addHome" });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render("host/host-home-list", {
     registeredHomes: registeredHomes,
     pageTitle: "host Home List",
     currentPage: "host-homes",
   })
 );
 // console.log(registeredHomes);
};


exports.postAddHome = (req, res, next) => {
  //console.log(req.body);
  const { houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.save();

  //registeredHomes.push(req.body);
  res.render("host/home-added", {
    pageTitle: "Home Added",
    currentPage: "homeAdded",
  });
};



//exports.registeredHomes = registeredHomes;