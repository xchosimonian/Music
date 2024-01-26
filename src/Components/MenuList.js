import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { IoRadioSharp } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { IoIosAlbums } from "react-icons/io";

const MenuList = [
    {
        id:1,
        icon:<FaHome/>,
        name:"Home"
    },    
    {
        id:2,
        icon:<FaMusic/>,
        name:"Discover"
    },
    {
        id:3,
        icon:<IoRadioSharp/>,
        name:"Radio"
    },
    {
        id:4,
        icon:<FaMicrophoneAlt/>,
        name:"Artist"
    },
    {
        id:5,
        icon:<IoIosAlbums/>,
        name:"Albums"
    },
    {
        id:6,
        icon:<PiApplePodcastsLogoFill/>,
        name:"Podcasts"
    },
    
]
export {MenuList}