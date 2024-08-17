import mongoose from "mongoose";

const examNews= new mongoose.Schema({
    //these are the names of input...name='name'
    semesterName:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        // required:true

    },
    detail:{
        type:String,
        // required:true

    },
    
    

})


const examNewsModel= new mongoose.model("examNews",examNews)


export default examNewsModel;
