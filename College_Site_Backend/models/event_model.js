import mongoose from "mongoose";

const Events= new mongoose.Schema({
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
    time:{
        type:String,
        // required:true

    },
    location:{
        type:String,
        // required:true

    },

    

})


const eventModel= new mongoose.model("Events",Events)


export default eventModel;
