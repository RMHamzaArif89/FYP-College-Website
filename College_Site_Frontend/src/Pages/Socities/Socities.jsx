import React, { useState } from 'react'
import './socities.css'
import ReactDom from 'react-dom'
import { SocitiesData } from './SocitiesData';
import { ImCross } from "react-icons/im";

import { motion, AnimatePresence } from 'framer-motion'

function Socities() {
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
    <div className='socities'>
      <div className="socitiesCon">
      {SocitiesData.map(item => (
  <motion.div className='socitiesCard'
  variants={cardVariants}
  layoutId={item.id} onClick={() =>
   setSelectedId(item.id)}>
    <motion.h5 className='socitiesHeading'>{item.title}</motion.h5>
    <motion.button>Detail</motion.button>

  </motion.div>
))}

<AnimatePresence>
  {selectedId && ( 
     <div className="socitiesSelectedCon">
       <motion.div className='societySelected' layoutId={selectedId}>
      <motion.h2 className='societyCardSelectedH2 selectedItem'>{SocitiesData[selectedId - 1].title} </motion.h2>
      <motion.button style={buttonStyle} onClick={() => setSelectedId(null)}><ImCross/></motion.button>
    </motion.div>
     </div>
  
  )}
</AnimatePresence>
      </div>
    </div>
  )
}

export default Socities
