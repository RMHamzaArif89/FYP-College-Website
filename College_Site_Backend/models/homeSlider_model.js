import mongoose from "mongoose";

const homeSlider= new mongoose.Schema({
    //these are the names of input...name='name'
    heading:{
        type:String,
        required:true

    },
    subHeading:{
        type:String,
        // required:true

    },
    img:{
        type:String,
        // required:true

    },

    

})


const homeSliderModel= new mongoose.model("homeSlider",homeSlider)


export default homeSliderModel;