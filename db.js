const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('MongoDB Connected Successfully!');
    
}).catch((error)=>{
    console.log(`MongoDb connection falied due to ${error}`);
    
})