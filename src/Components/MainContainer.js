import React from 'react'
import '../Styles/MainContainer.css'
import { Banner } from './Banner'
import { IoPeople } from "react-icons/io5";
import { AudioList } from './AudioList';

function MainContainer() {
  return <div className='mainContainer'>
    <Banner/>

    <div className='menuList'>
      <ul>
        <li>
          <a href='#'>Popular</a>
        </li>
        <li>
          <a href='#'>Albums</a>
        </li>
        <li>
          <a href='#'>Songs</a>
        </li>
        <li>
          <a href='#'>Fans</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
      <p>
        <i>
         <IoPeople/>
        </i>
        12.3M <span>Followers</span>
      </p>
    </div>
    <AudioList/>
  </div>
}

export  {MainContainer}