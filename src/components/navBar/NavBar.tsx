import { Link} from "react-router-dom";
import {HiOutlineHome} from "react-icons/hi"
import { IoSearchOutline } from 'react-icons/io5'
import {AiOutlineHeart} from 'react-icons/ai'
import { ThemeContext } from "../lib/context/ThemeContext";
import { useContext } from "react";

export default function NavBar(){
    let theme = useContext(ThemeContext)

    return(
        <div className={`fixed bottom-0 ${theme.background5} w-full`}>
            <ul className="flex flex-row h-20 items-center justify-center">
                <li >
                <Link to={"/search"}><button className="flex items-center justify-center w-20 h-20"><IoSearchOutline color="white"/></button></Link>
                </li>
                <li>
                <Link to={"/home"}><button className="flex items-center justify-center w-20 h-20"><HiOutlineHome color="white"/></button></Link>
                </li>
                <li>
                <Link to={"/fav"}><button  className="flex items-center justify-center w-20 h-20"><AiOutlineHeart color="white"/></button></Link>
                </li>
            </ul>
    </div>
    )
}