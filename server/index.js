const express =require( 'express')
 require('dotenv').config()
 var cors = require('cors')
const app = express()
const rootRouter = require('./routes/root')
const mongoose = require('mongoose')
const MongoDbconnect = require('./config/mongoDbConnection')
MongoDbconnect()
app.use(cors())
app.use(express.json())
app.use('/',rootRouter)
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT,()=>{
        console.log(`Server listening on ${process.env.PORT}` )
    })
})
