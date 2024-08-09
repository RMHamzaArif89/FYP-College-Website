import mongoose from "mongoose";

const Events= new mongoose.Schema({
    //these are the names of input...name='name'
    title:{
        type:String,
        required:true

    },
    detail:{
        type:text,
        // required:true

    },
    img:{
        type:String,
        // required:true

    },
    date:{
        type:Date,
        required:true

    },
    time:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true

    },

    

})








// mongoose collection name specfied//created the new collection|table
const Cities_house= new mongoose.model("Events",Events)

//export the schema that will be import in the main.js file
module.exports=Cities_house;
