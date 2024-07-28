import React, { useState } from 'react'
import './examNews.css'
import ReactDom from 'react-dom'
import ExamNewsData from './ExamNewsData'
import { ImCross } from "react-icons/im";

import { motion, AnimatePresence } from 'framer-motion'

function ExamNews() {
    const [selectedId, setSelectedId] = useState(null)
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
      {ExamNewsData.map(item => (
  <motion.div className='examCard'
  variants={cardVariants}
  layoutId={item.id} onClick={() =>
   setSelectedId(item.id)}>
    <motion.h5 className='semesterHeading'>{item.title}</motion.h5>
    <motion.div className='examCardDate'>
      <motion.div className='examDate'>Exam Date</motion.div>
      <motion.h5 className='examCardH5 selectedItem'> <img src="/images/dateIcon.png" alt="" /> {item.date} </motion.h5>
      </motion.div>
    <motion.div className='semesterDes'>{item.description}</motion.div>

  </motion.div>
))}

<AnimatePresence>
  {selectedId && ( 
     <div className="examSelectedCon">
       <motion.div className='examCardSelected' layoutId={selectedId}>
      <motion.h2 className='examCardSelectedH2 selectedItem'> <img src="/images/smesterIcon.png" alt="" /> {ExamNewsData[selectedId - 1].title} </motion.h2>
      <motion.div className='examCardSelectedDate'>
      <motion.div className='examDate'>Exam Date</motion.div>
      <motion.h5 className='examCardSelectedH5 selectedItem'> <img src="/images/dateIcon.png" alt="" /> {ExamNewsData[selectedId -1 ].date} </motion.h5>
      </motion.div>
      <motion.div className='examCardSelectedDes'>{ExamNewsData[selectedId - 1].description}</motion.div>
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
