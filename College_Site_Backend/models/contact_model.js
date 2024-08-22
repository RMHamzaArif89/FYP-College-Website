import mongoose from "mongoose";

const userContact= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    email:{
        type:String,
        // required:true

    },
    message:{
        type:String,
        // required:true

    },
    
    rollNumber:{
        type:Number,
        // required:true

    },
    cell:{
        type:Number,
        // required:true

    },
    query:{
        type:String,
        // required:true

    },
    
    

})


const userContactModel= new mongoose.model("userContact",userContact)


export default userContactModel;
