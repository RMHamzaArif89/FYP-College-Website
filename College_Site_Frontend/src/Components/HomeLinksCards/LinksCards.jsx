import React from 'react'
import './linksCards.css'
import LinksData from './LinksCardsData'
import {Link, NavLink} from 'react-router-dom'

function LinksCards() {
    return (
        <div className='linksCards'>
            {
                LinksData.map((data,i) => {
                    return (
                        <div className="linksCard" key={i}>
                            <img src={data.img} alt="" className="linksCardImg" />
                            <div className="linksDes">{data.description}</div>
                            <Link className="linksTitle" to={data.path}>{data.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LinksCards
