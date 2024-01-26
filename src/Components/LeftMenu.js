import React from 'react';
import '../Styles/LeftMenu.css';
import { FaGithubAlt, FaEllipsisH } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';

function LeftMenu() {
  return <div className='leftMenu'>
    <div className='logoContainer'>
    <i><FaGithubAlt/></i>
    <h2>Music Player</h2>
    <i><FaEllipsisH/></i>
    </div>
    <div className='searchBox'>
        <input type='text' placeholder='Search...'/>
        <i className='searchIcon'>
            <FaSearch/>
        </i>
    </div>
    <Menu title={"Menu"} menuObject={MenuList}/>

    <MenuPlayList/>
    <TrackList/>
  </div>
}

export  {LeftMenu}