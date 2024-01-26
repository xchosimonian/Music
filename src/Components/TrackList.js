import React from 'react'
import { AiFillSound } from "react-icons/ai";
import { BsFillFileMusicFill } from "react-icons/bs";
import { PiMonitorFill } from "react-icons/pi";
import Track from '../img/track.png';

function TrackList() {
  return  <div className='trackList'>
    <div className='top'>
        <img src={Track} alt=''/>
        <p className='trackName'>Sample Name
         <span className='trackSpan'>Artist</span></p>
    </div>
    <div className='bottom'>
        <i><AiFillSound/></i>
        <input type='range'/>
        <i><BsFillFileMusicFill/></i>
        <i><PiMonitorFill/></i>
    </div>
  </div>

}

export  {TrackList}