// const mongoose = require('mongoose');

// var newuserSchema = mongoose.Schema({
//     name : {
//         type = string,
//         required : [true,'Name should not be empty']
//     },
//     email : {
//         type = string,
//         unique = [true,'Email already existed'],
//         pattern = [ /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,'Email should be in proper email format']
//     },
//     marks:{
//         type = Number,
//         max = [6,'Number should be smaller then 6'],
//         min = [2,'Number should greater then 2']
//     }
// });

// mongoose.model('register',newuserSchema);

const mongoose = require('mongoose');


var newUserSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:[true,'Name should not be empty']
    },
    email:{
      type:String,
      unique:true,
    //   pattern:['/','error']  
    },
    marks:{
        type:Number,
        max:[6,'number should be greater than 6'],
        min:2,
    }


});

mongoose.model('register',newUserSchema);