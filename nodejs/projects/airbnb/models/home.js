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
  }

  static fetchAll(){
    return registeredHomes;
  }

}