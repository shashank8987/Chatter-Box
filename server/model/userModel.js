const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required: true,
        min:2,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        max:8,
    },
    isAvatarImageSet:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:""
    },
});

module.exports=mongoose.model("Users",userSchema)