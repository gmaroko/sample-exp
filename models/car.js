const mongoose = require('mongoose');


let car_schema = new mongoose.Schema({
    engine_size: {type: Number, required: true},
    color: {type: String, required: true},
    yom: {type: Number, required: true},
    deleted: {type: Boolean, default: false},
    created_date: {type: Date, default: Date.now()},
});

let Car = mongoose.model('Car', car_schema);

module.exports = Car;