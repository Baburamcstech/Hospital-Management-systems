const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    Unique_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   
    address:{
        type:String
        
    },
    doctor:{
        type:String
        
    },
    problem:{
        type:String
        
    },
    time_slot:{
        type:String
        
    }

})
module.exports=mongoose.model('Appointment',userSchema);