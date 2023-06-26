const mongoose =require('mongoose');
const userSchema=mongoose.Schema({
    // doctor: { type: Schema.Types.ObjectId, ref: 'Author' },
    username:{
       type:String,
       required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('patient',userSchema);