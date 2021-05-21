require('../model/usermodel');
require('../model/registerModel');
require('../model/adminModel');
require('../config/passportconfig')

const mongoose = require('mongoose');
const passport = require('passport')
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var regData = mongoose.model('register');
var userData = mongoose.model('user');
var adminData=mongoose.model('admin');

module.exports.addnew = (req,res) => {

    var myData = new userData ({
        name:req.body.username,
        email:req.body.useremail,
        contact:req.body.usercontact,
        address:req.body.useraddress
    });
    myData.save().then((docs)=>{
        return res.status(200).json({
            message:'data inserted successfully',
            success:true,
            data:docs
        });
    }).catch((err)=>{
        return res.status(401).json({
            message:'Error in adding new user',
            success:true,
            data:err.message
        });
    });

}

// Fetch all the records from the database

module.exports.getAll = (req,res)=>{
    return userData.find().then((docs)=>{
        res.status(200).json({
            success:true,
            message:'List of users',
            data:docs
        })
    })
    .catch((err)=>{
        res.status(401).json({
            success:false,
            message:'Error in finding records of user',
            error:err.message
        })
    })
}

// Fetch selected data from the database

module.exports.selectedData = (req,res)=>{
    const uid = req.params.userid;

    userData.findById({_id:uid}).then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'Record found',
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'no record found',
            error:err.message
        })
    })
}

module.exports.selectbyfield = (req,res) => {
    userData.findOne({name:req.params.username}).skip(1).sort({name:1}).then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'Record found',
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'no record found',
            error:err.message
        })
    })
}

// update

module.exports.updatedData=(req,res)=>{

    // var updatedData={
    //     name:req.body.username,
    //     email:req.body.useremail,
    //     contact:req.body.usercontact,
    //     address:req.body.useraddress
    // }

    // var updatedData = req.body;

    // const id=req.params.id;
    userData.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
    .then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'Data updated',
            data:docs
        })
    }).catch((err)=>{
            return res.status(401).json({
                success:false,
                message:'Error in updating data',
                err:err.message
        })
    })
}

//DELETE


module.exports.deletedata = (req,res) => {


    userData.findByIdAndRemove({_id:req.params.id})
    .then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'Data Deleted',
            data:docs
        })
    }).catch((err)=>{
            return res.status(401).json({
                success:false,
                message:'Error in Deleting data',
                err:err.message
        })
    })
}


// DATA VALIDATION

module.exports.registerData = (req,res) => {

    var newReg = regData({
        name : req.body.uname,
        email : req.body.uemail,
        marks : req.body.umarks
    });

    newReg.save()
    .then((docs)=>{
        return res.status(200).json({
            success:true,
            message: "New user Register Successfully",
            data:docs
        });
    }).catch((err)=>{
        return res.status(401).json({
            success:false,
            message:"Error in registering new user",
            err:err.message
        });
    });

}

// Admin password encryption

module.exports.addAdmin=(req,res)=>{
    var adData=new adminData({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        address : req.body.address,
        password:req.body.password,
    });

    adData.save().then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'New Data recorded',
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'Error in adding data',
            error:err.message
        })
    })
}

//to check authentication

module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) return res.status(404).json(err);
        if(user) return res.status(200).json({
            "token":jwt.sign({_id:user._id},"SecretToken",{expiresIn:'20m'}),
            "user":user
        });
        if(info) return res.status(401).json(info);
    })(req,res,next)
}

// Authentication using json web token

module.exports.userProfile = (req,res,next) => {
    const id = req._id;
    adminData.find({_id:id}).then((docs) =>
    {

        return res.status(200).json({
            success:true,
            message: 'User Record Found',
            data:docs
        });

    }).catch((err) => {

        return res.status(401).json({
            success:false,
            message:"Error in finding Records",
            error : err.message
        });

    });
}
