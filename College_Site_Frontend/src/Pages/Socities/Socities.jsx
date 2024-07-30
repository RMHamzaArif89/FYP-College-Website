import React, { useState } from 'react'
import './socities.css'
import ReactDom from 'react-dom'
import { SocitiesData, SocitiesCubeData } from './SocitiesData';
import { ImCross } from "react-icons/im";

import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCube } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-cube';

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
    const buttonStyle = {
        color: 'white',
        fontSize: '1.8rem',
        padding: '0rem',
        cursor: 'pointer',
        position: 'absolute',
        right: '0.5rem',
        top: '0.5rem',
        border: 'none',
        outline: 'none',
        backgroundColor: 'darkRed',
    }
    return (
        <div className="socitiesPage">
            <div className="socitiesPageCon">
                <img className="socitiesPageConIcon" src='/images/societyIcon.png'/>
                <div className="socitiesPageConHeading">Clubs & Socities</div>
                <div className="socitiesPageConText">
                    GGCSF has established vaious clubs and socities for talented Students Co-Curricula Activities (Co-Curricuilar Activieis: Speeches, Debates, Essay Writing)
                </div>
            </div>
            <div className='socities'>
                <div className="socitiesCon">
                    {SocitiesData.map(item => (
                        <motion.div className='socitiesCard'
                            variants={cardVariants}
                            layoutId={item.id} onClick={() =>
                                setSelectedId(item.id)}>
                            <motion.h5 className='socitiesHeading'>{item.title}</motion.h5>
                            <motion.div className='socitieCardBtn'>Detail</motion.div>

                        </motion.div>
                    ))}

                    <AnimatePresence>
                        {selectedId && (
                            <div className="socitiesSelectedCon">
                                <motion.div className='societyCardSelected' layoutId={selectedId}>
                                    <motion.h2 className='societyCardSelectedH2 selectedItem'>{SocitiesData[selectedId - 1].title} </motion.h2>
                                    <motion.button style={buttonStyle} onClick={() => setSelectedId(null)}><ImCross /></motion.button>
                                </motion.div>
                            </div>

                        )}
                    </AnimatePresence>
                </div>

                <div className="socitesCon2">

                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                            // disableOnInteraction: false
                        }}
                        loop={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[Autoplay, EffectCube, Pagination]}
                        className="sportsSwiper"
                    >
                        {
                            SocitiesCubeData.map((data) => {
                                return (
                                    <SwiperSlide className='socitiesSwiperSlide'>

                                        <div className="socitiesCubeHeading">{data.heading}</div>
                                        <div className="socitiesCubeText">{data.text}</div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Socities
