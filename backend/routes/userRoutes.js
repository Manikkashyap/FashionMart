var express = require('express');
var myctrl = require('../controller/usercontroller');

var approute = express.Router();

var jt = require('../config/jwthealper');

approute.post('/newuser',myctrl.addnew);
approute.get('/getAll',myctrl.getAll);
approute.get('/selectRecord/:userid',myctrl.selectedData);
approute.get('/selectedfield',myctrl.selectbyfield);
approute.put('/updateRecord/:id',myctrl.updatedData);
approute.delete('/del/:id',myctrl.deletedata);

// Register

approute.post('/reg',myctrl.registerData);

// Admin

approute.post('/admin',myctrl.addAdmin);

approute.post('/auth',myctrl.authenticate);

approute.post('/profile',jt.verifyjwtToken,myctrl.userProfile);

module.exports = approute;
