import React, { useEffect, useState } from 'react'
import './examNews.css'
import ReactDom from 'react-dom'
import { ImCross } from "react-icons/im";
import axios from 'axios';

import { motion, AnimatePresence } from 'framer-motion'

function ExamNews() {
    const [selectedId, setSelectedId] = useState(null)
    const [examNews, setExamNews] = useState([]);
    const [loading,setLoading]=useState(false)
  
    useEffect(() => {
      const getExamNews = async () => {
        const res = await axios.get('http://localhost:5001/api/examNews/getExamNews');
        setExamNews(res.data.examNews)
    
      };
      getExamNews();
  
    }, []);

    const cardVariants = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },

    },
  };
  const buttonStyle={
    color: 'white',
    fontSize:'1.8rem',
    padding:'0rem',
    cursor: 'pointer',
    position:'absolute',
    right:'0.5rem',
    top:'0.5rem',
    border:'none',
    outline:'none',
    backgroundColor:'darkRed',
  }
  return (
    <div className='examNews'>
      <div className="examNewsCon">
      {
        examNews.length>0?(
          examNews.map((semester)=> (
     
            <motion.div className='examCard'
            variants={cardVariants}
            layoutId={semester._id} onClick={() =>
             setSelectedId(semester)}>
              <motion.h5 className='semesterHeading'>{semester.semesterName}</motion.h5>
              <motion.div className='examCardDate'>
                <motion.div className='examDate'>Exam Date</motion.div>
                <motion.h5 className='examCardH5 selectedItem'> <img src="/images/dateIcon.png" alt="" /> {semester.date} </motion.h5>
                </motion.div>
              {/* <motion.div className='semesterDes'>{semester.detail}</motion.div> */}
          
            </motion.div>
          ))
        ): <img src="/images/noDataFoundImg.jpg" className='noDataFoundImgExamNews' alt="" />
      }

<AnimatePresence>
  {selectedId && ( 
    
     <div className="examSelectedCon">
       <motion.div className='examCardSelected' layoutId={selectedId._id}>
      <motion.h2 className='examCardSelectedH2 selectedItem'> <img src="/images/smesterIcon.png" alt="" /> {selectedId.semesterName} </motion.h2>
      <motion.div className='examCardSelectedDate'>
      <motion.div className='examDate'>Exam Date</motion.div>
      <motion.h5 className='examCardSelectedH5 selectedItem'> <img src="/images/dateIcon.png" alt="" /> {selectedId.date} </motion.h5>
      </motion.div>
      <motion.div className='examCardSelectedDes'  dangerouslySetInnerHTML={{__html:selectedId.detail}}   />
      <motion.button style={buttonStyle} onClick={() => setSelectedId(null)}><ImCross/></motion.button>
    </motion.div>
     </div>
  
  )}
</AnimatePresence>
      </div>
    </div>
  )
}

export default ExamNews
