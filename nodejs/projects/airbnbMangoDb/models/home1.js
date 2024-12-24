//core module
// const fs = require('fs')
// const path = require('path')

// const rootDir = require('../utils/PathUtil');
// const Favourite = require('./favourite');

//let registeredHomes = [];

// const homeDataPath =  path.join(rootDir,'data' ,'home.json');

module.exports = class Home{
  constructor(houseName , price,location,rating,imageUrl){
    this.houseName = houseName;
    this.price = price;
    this.location=location;
    this.rating=rating;
    this.imageUrl=imageUrl;
  }
  save(){
    Home.fetchAll(registeredHomes=>{
      if(this.id){//edit home case
        registeredHomes= registeredHomes.map(home=>
         home.id === this.id ? this : home)

      }else{//add home case
        this.id=Math.random().toString();
        registeredHomes.push(this);
      }


      fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),err=>{
       console.log("File writing Concluded" , err);
      })
    })
  }

  static fetchAll(callback){
    fs.readFile(homeDataPath,(err,data)=>{
      console.log("File writing Concluded" ,err);
      callback(!err ?JSON.parse(data) : [] )
      // if(!err){
      //   callback(JSON.parse(data))
      // }else{
      //   callback([]);
      // }
     }); 
  }
  static findById(homeId,callback){
    this.fetchAll(homes =>{
      const homeFound = homes.find(home=>home.id === homeId);
      callback(homeFound)
    })
  }

  static deleteById(homeId,callback){
    this.fetchAll(homes =>{
      homes= homes.filter(home=>
        home.id !== homeId);
        fs.writeFile(homeDataPath,JSON.stringify(homes),err=>{
          Favourite.deleteById(homeId,callback);
        });
         })
  }



}