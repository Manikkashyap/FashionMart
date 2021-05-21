const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var adminschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Should be Entered"]
    },
    email:{
        type:String,
        required:[true,"Email should be Entered"],
        unique:[true,"Email already Exists"]
    },
    contact:{
        type:String,
        required : [true,'Contact should be Entered'],
        minlength : [10,'Please enter a valid contact number.']
    },
    address:{
        type : String,
        required : [true,'Address should be Entered']
    },
    password:{
        type:String,
        required : [true,'Password should be entered'],
        minlength : [6,"Password Should be greater than 6"]
    },
    saltString:{type:String}
});

// Method for encrypting password

adminschema.pre('save',function(next){
    bcrypt.genSalt(15,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash,
            this.saltString=salt
            next();
        })
    })

});

adminschema.methods.verifyPassword=function(password){
    return bcrypt.compareSync(password,this.password);
}

mongoose.model('admin',adminschema);



//methods for encrypting password

