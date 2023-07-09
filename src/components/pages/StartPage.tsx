import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../lib/context/ThemeContext";

export default function StartPage(){
    const [artist, setArtist] = useState("");

    let theme = useContext(ThemeContext)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(artist);
        <Link to={`/{artist}`}></Link>
    }

    return(
            <div className={`w-full h-screen ${theme.background2} background-animate`}>
                    <form onSubmit={handleSubmit} className={`${theme.background8} bg-opacity-30`}>
                        <section className="flex items-center justify-center h-screen w-screen">
                            <div className="flex-col items-center justify-center">
                                <div className="flex font-medium text-4xl sm:text-7xl justify-center text-white m-2 p-2">Search Artist</div>
                                <div> <input type="text" name="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} className="m-2 p-2 w-full rounded-full" placeholder="input artist name"></input></div>
                                <div className="flex justify-center">
                                    <div className="flex-row">
                                        <Link to= {"/" + artist}><button type="submit" className="rounded-full bg-white text-center hover:bg-gray-400 sm:w-56 sm:h-10  w-20 m-2 p-2">submit</button></Link>
                                        <button type="reset" onClick={(e)=>setArtist("")} className="rounded-full bg-white text-center hover:bg-gray-400 sm:w-56 sm:h-10  w-20 m-2 p-2">clear</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
        )
}