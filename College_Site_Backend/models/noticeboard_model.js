import mongoose from "mongoose";

const noticeBoard= new mongoose.Schema({
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

    

})


const noticeBoardModel= new mongoose.model("noticeBoard",noticeBoard)


export default noticeBoardModel;

