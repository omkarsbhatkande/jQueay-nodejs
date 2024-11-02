const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Add-home", currentPage: "addHome" });
};

exports.postAddHome = (req, res, next) => {
  //console.log(req.body);
  const { houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.save();

  //registeredHomes.push(req.body);
  res.render("homeAdded", {
    pageTitle: "Home Added",
    currentPage: "homeAdded",
  });
};

exports.getHomes = (req, res, next) => {
   Home.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    })
  );
  // console.log(registeredHomes);
};

//exports.registeredHomes = registeredHomes;
