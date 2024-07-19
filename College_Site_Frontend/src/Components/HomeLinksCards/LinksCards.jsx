import React from 'react'
import './linksCards.css'
import LinksData from './LinksCardsData'

function LinksCards() {
    return (
        <div className='linksCards'>
            {
                LinksData.map((data) => {
                    return (
                        <div className="linksCard">
                            <img src={data.img} alt="" className="linksCardImg" />
                            <div className="linksDes">{data.description}</div>
                            <div className="linksTitle">{data.title}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LinksCards
