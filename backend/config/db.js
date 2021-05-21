const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb',{useUnifiedTopology:true,useNewUrlParser:true}).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
