import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { OtherArtist } from "../homePage/OtherArtist";
import NavBar from "../navBar/NavBar";
import { IoSearchOutline } from 'react-icons/io5'
import {MdClear} from 'react-icons/md'
import { ThemeContext } from "../lib/context/ThemeContext";
export default function Search(){
    const [artist, setArtist] = useState("");

    let theme = useContext(ThemeContext)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }

    return(
        <div>
        <form onSubmit={handleSubmit} className={`w-full p-6 ${theme.background3} bg-opacity-80`}>
                        <div className="flex justify-start">
                            <div className="flex-row w-full">
                                <input type="text" name="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} className={`${theme.background8} ${theme.text} m-2 p-2 rounded-full w-1/2`} placeholder="input artist name"></input>
                                <Link to= {"/" + artist}><button type="submit" className={`rounded-full ${theme.background7} text-center hover:${theme.background9} m-2 p-2`}><IoSearchOutline color="white"/></button></Link>
                                <button type="reset" onClick={(e)=>setArtist("")} className={`rounded-full ${theme.background7} text-center hover:${theme.background9} m-2 p-2`}><MdClear color="white"/></button>
                         </div>
                        </div>
        </form>
        <OtherArtist/>
        <NavBar/>
        </div>
    )
}