const express = require('express');
const index_router = require('./routes/index');
const connect_db = require('./config/db');


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs')

app.use('/', index_router);


let db = connect_db();

let PORT = process.env.PORT;

if(!PORT){
    PORT = 5500
    console.log(`Listen PORT set to custom: $PORT`);
} else {
    console.log(`Listen PORT set to default: $PORT`);
}

app.listen(PORT, (start_event)=>{
    console.log("Starting application: " + start_event);
})