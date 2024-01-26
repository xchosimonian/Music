import React from 'react'
import Artist from '../img/artist.jpg'
import Check from '../img/check.png'
import { ImHeadphones } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
function Banner() {
    return <div className='banner'>
        <img src={Artist} alt='' className='bannerImg' />
        <div className='content'>
            <div className='breadCrump'>
                <p>
                    Home <span>/Popular Artist</span>
                </p>
                <i>
                    <FaEllipsisV />
                </i>
            </div>
            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                        <h2>A-Ha</h2>
                        <img src={Check} alt='' />
                    </div>
                
                <p><i><ImHeadphones /></i>6,665,223,448 <span>Monthlu listeners</span></p>
                </div>
                <div className='right'>
                    <a href='#'>Play</a>
                    <a href='#'>
                        <i> <FaCheck /></i>
                        Following
                    </a>
                </div>
            </div>
        </div>
        <div className='bottomLayer'></div>
    </div>

}

export { Banner }