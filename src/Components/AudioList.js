import React, { useEffect, useState } from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Songs } from "./Songs";
import {MusPlayer} from './MusPlayer';
function AudioList() {
    const [songs,setSongs] = useState(Songs);
    const [song, setSong] = useState(Songs[0].song);
    const [img, setImage] = useState(Songs[0].imgSrc);

    useEffect(() => {
        const songs = document.querySelectorAll(".songs");
        console.log(songs);
        function changeMenuActive(){
            songs.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
        songs.forEach((n) => n.addEventListener("click", changeMenuActive))
    }, []);


    const chagneFavourite = (id) => {
        Songs.forEach ((song) => {
            if (song.id == id) {
                song.favourite = !song.favourite;
            }
        })
        setSongs([...Songs])
    }
    const setMainSong = (songSrc, imgSrc) =>{
        setSong(songSrc);
        setImage(imgSrc);
    }
    return <div className='audioList'>
        <h2 className='title'>
            The list <span>{`${Songs.length} songs`}</span>
        </h2>
        <div className='songsContainer'>
            {Songs &&
                Songs.map((song, index) => (


                    <div className='songs' key={song.id}
                    onClick={()=> setMainSong(song?.song,song?.imgSrc)}
                    >
                        <div className='count'>{`#${index + 1}`}</div>
                        <div className='song'>
                            <div className='imgBox'>
                                <img src={song?.imgSrc} alt='' />
                            </div>
                            <div className='section'>
                                <p className='songName'>
                                    {song?.songName}
                                    <span className='spanArtist'>
                                        {song?.artist}
                                    </span>
                                </p>
                                <div className='hits'>
                                    <p className='hit'>
                                        <i><FaHeadphonesAlt /> 94,251,200</i>
                                    </p>
                                    <p className='duration'>
                                        <i>
                                            <AiOutlineClockCircle /> 03.04
                                        </i>
                                    </p>
                                    <div className='favourite'
                                    onClick={() => chagneFavourite(song?.id)}>
                                        {
                                            song?.favourite ?
                                            <i><FaHeart /></i>
                                            :
                                                <i><FaRegHeart /></i>
                                                
                                               
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        <MusPlayer song={song}  imgSrc={img}/>
    </div>
}

export { AudioList }