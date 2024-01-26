import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { PlayList } from './PlayList';
import { MdLibraryMusic, } from "react-icons/md";
import { BiNoEntry } from "react-icons/bi";

function MenuPlayList() {
    return <div className='playListContainer'>
        <div className='nameContainer'>
            <p>PlayList</p>
            <i>
                <GoPlusCircle />
            </i>
        </div>
        <div className='playListScroll'>
            {PlayList
             && PlayList.map((list) => (
                               <div className='playList' key={list.id}>
            <i className='list'>
                <MdLibraryMusic />
            </i>
            <p>{list.name}</p>
            <i className='trash'>
                <BiNoEntry />
            </i>
        </div> 
                ))
            }

        </div>
    </div>

}

export { MenuPlayList }