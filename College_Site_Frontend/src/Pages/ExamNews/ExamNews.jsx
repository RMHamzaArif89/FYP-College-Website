import React, { useState } from 'react'
import './examNews.css'
import ReactDom from 'react-dom'
import ExamNewsData from './ExamNewsData'

import { motion, AnimatePresence } from 'framer-motion'

function ExamNews() {
    const [selectedId, setSelectedId] = useState(null)
    const cardVariants = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className='examNews'>
      <div className="examNewsCon">
      {ExamNewsData.map(item => (
  <motion.div className='examCard'
  variants={cardVariants}
  layoutId={item.id} onClick={() =>
   setSelectedId(item.id)}>
    <motion.h5>{item.title}</motion.h5>
    <motion.h2>{item.date}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && ReactDom.createPortal(
    <motion.div className='examCardSelected' layoutId={selectedId}>
      <motion.h5>{ExamNewsData[selectedId - 1].title}</motion.h5>
      <motion.h2>{ExamNewsData[selectedId -1 ].date}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>,
     document.querySelector('.modalPortal')
  )}
</AnimatePresence>
      </div>
    </div>
  )
}

export default ExamNews
