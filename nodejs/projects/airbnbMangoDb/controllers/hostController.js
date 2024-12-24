const Home = require("../models/home");


exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { 
    pageTitle: "Add-home to airbnb", 
    currentPage: "addHome",
    editing:false,
   });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId).then(([homes])=>{
    const home = homes[0];
    if(!home){
      console.log("home not fond for editing");
      return res.redirect("/host/host-home-list")
    }
    console.log(homeId,editing,home);
    res.render("host/edit-home", { 
      home:home,
      pageTitle: "Edit Your Home ", 
      currentPage: "host-homes",
      editing:editing
     });
  })
};



exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) =>{
   res.render("host/host-home-list", {
     registeredHomes: registeredHomes,
     pageTitle: "host Home List",
     currentPage: "host-homes",
   })
});
 // console.log(registeredHomes);
};


exports.postAddHome = (req, res, next) => {
  //console.log(req.body);
  const { houseName, price, location, rating, imageUrl ,description} = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl,description);
  home.save();
  res.redirect("/host/host-home-list");
  //registeredHomes.push(req.body);
  // res.render("host/home-added", {
  //   pageTitle: "Home Added",
  //   currentPage: "homeAdded",
  // });
};


exports.postEditHome = (req, res, next) => {
  //console.log(req.body);
  const { id,houseName, price, location, rating, imageUrl,description } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl,description,id);
  home.save();
  res.redirect("/host/host-home-list");
};


exports.postDeleteHome = (req, res, next) => {
const homeId = req.params.homeId;
console.log("came to delte home id ",homeId);
Home.deleteById(homeId).then(()=>{
  res.redirect("/host/host-home-list");
}).catch(error=>{
  console.log(error);
  
})
}





//exports.registeredHomes = registeredHomes;