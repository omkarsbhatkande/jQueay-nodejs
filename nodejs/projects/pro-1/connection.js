const mongoose = require("mongoose");


async function connectMonoDb(url) {
 return  mongoose.connect(url)
}

module.exports = {
  connectMonoDb,
}

