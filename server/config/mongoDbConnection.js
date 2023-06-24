const mongoose = require('mongoose')

const MongoDbconnect = async ()=>{
   try{
    await mongoose.connect(process.env.MongoDBURI)
   }
 catch(err){
    console.log(err)
 }
}

module.exports = MongoDbconnect