const mongoose = require('mongoose');

var userschema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:Number
    },
    address:{
        type:String
    }

});

mongoose.model('user',userschema);