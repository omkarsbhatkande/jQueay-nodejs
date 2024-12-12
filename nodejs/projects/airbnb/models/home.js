//core module
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/PathUtil')

//let registeredHomes = [];

const homeDataPath =  path.join(rootDir,'data' ,'home.json');

module.exports = class Home{
  constructor(houseName , price,location,rating,imageUrl){
    this.houseName = houseName;
    this.price = price;
    this.location=location;
    this.rating=rating;
    this.imageUrl=imageUrl;
  }
  save(){
    this.id=Math.random().toString();
    Home.fetchAll(registeredHomes=>{
      registeredHomes.push(this);
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

}