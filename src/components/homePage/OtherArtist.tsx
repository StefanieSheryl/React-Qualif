import { CardContainer } from './CardContainer';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../lib/context/ThemeContext";
import { useContext } from "react";

export function OtherArtist(){
    
    const artist = [
        "Drake",
        "The Weeknd",
        "BlackPink",
        "BTS",
        "NewJeans",
        "Michael Jackson",
        "Taylor Swift",
        "Pamungkas",
        "DPR IAN",
        "IU",
        "Keshi",
        "Doja Cat",
        "Selena Gomez",
        "Justin Bieber",
        "NIKI",
        "Tulus",
        "Ardhito Pramono",
        "Ariana Grande",
        "Harry Styles",
        "Olivia Rodrigo"
    ]

    let theme = useContext(ThemeContext)


    return(
        <div className={`flex flex-col max-w-screen max-h-screen overflow-scroll ${theme.background6}`}>
            <div className={`m-4 p-4 flex text-3xl sm:text-5xl items-center justify-center font-medium text-white ${theme.background1} rounded-xl`}>Top Searched Artists</div>
            {artist.map((solo, index) => (
                 <Link to = {"/" + solo}> <CardContainer datas ={solo}/></Link>
            ))}
              <div className='flex h-10 m-11 bg-transparent'></div>

        </div>
    )

}