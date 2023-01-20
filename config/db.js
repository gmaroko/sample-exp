const mongoose = require('mongoose');

let connect = function(){
    const DB_URL = process.env.DB_URL;
    var connect_options = {
        family: 4,
        maxPoolSize: 200,
        socketTimeoutMS: 10000,
        autoIndex: false
    };
    
    mongoose.connect(DB_URL, connect_options);

    let db = mongoose.connection;

    db.once('open', ()=>{
        console.log('Connect to DB success!');
    })
    
    db.on('error', (error_event)=>{
        console.log("Connect to DB failed")
        console.log(error_event);
    })

    return db;
}

module.exports = connect;