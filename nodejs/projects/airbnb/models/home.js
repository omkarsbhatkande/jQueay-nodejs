//core module
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/PathUtil')

const registeredHomes = [];

module.exports = class Home{
  constructor(houseName , price,location,rating,imageUrl){
    this.houseName = houseName;
    this.price = price;
    this.location=location;
    this.rating=rating;
    this.imageUrl=imageUrl;
  }
  save(){
    registeredHomes.push(this);
   const homeDataPath =  path.join
  }

  static fetchAll(){
    return registeredHomes;
  }

}