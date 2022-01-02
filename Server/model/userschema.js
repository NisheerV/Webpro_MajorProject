const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Contact:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    
});


const User=mongoose.model('reg',userSchema);

module.exports=User;