//core module
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/PathUtil')

//let registeredHomes = [];

const favouriteDataPath =  path.join(rootDir,'data' ,'favourite.json');

module.exports = class Favourite{
 static addToFavourite(homeId,callback){
      Favourite.getFavourites(favourites=>{
        if(favourites.includes(homeId)){
          callback("Home si already marked as favourites");
        }
        else{
          favourites.push(homeId);
          fs.writeFile(favouriteDataPath,JSON.stringify(favourites),callback);
        }
      })
 }

 static getFavourites(callback){
      fs.readFile(favouriteDataPath,(err,data)=>{
        console.log("File writing Concluded" ,err);
        callback(!err ?JSON.parse(data) : [] )
       }); 
 }

 static deleteById(delHomeId,callback){
  Favourite.getFavourites(homeIds =>{
    homeIds= homeIds.filter(homeId=>
      delHomeId !== homeId)
      fs.writeFile(favouriteDataPath,JSON.stringify(homeIds),callback);
       })
}


}