import mongoose from "mongoose";

const sportsNews= new mongoose.Schema({
    //these are the names of input...name='name'
    title:{
        type:String,
        required:true

    },
    detail:{
        type:String,
        // required:true

    },
    img:{
        type:String,
        // required:true

    },
    date:{
        type:String,
        // required:true

    },
 

    

})


const sportsNewsModel= new mongoose.model("sportsNews",sportsNews)


export default sportsNewsModel;
