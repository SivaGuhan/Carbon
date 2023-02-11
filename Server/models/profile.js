const mongoose=require('mongoose')
const ProfileSchema=new mongoose.Schema({
    username:"String",
    role:"String",
    preference:"String",
    loc:"String",
    email:"String"
})
const Cont=mongoose.model("Users",ProfileSchema);
module.exports=Cont;