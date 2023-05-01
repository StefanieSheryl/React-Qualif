import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import NavBar from '../navBar/NavBar'
import { OtherArtist } from '../homePage/OtherArtist'
import { ThemeContext } from "../lib/context/ThemeContext";
import { useContext } from "react";


export default function Home(){
    let theme = useContext(ThemeContext)
    
    return(
        <div className={`h-screen w-screen ${theme.background4} background-animate`}>
            <div>
                <div className={`flex items-center justify-center font-semibold text-white p-6 mb-4 ${theme.background1} w-full sm:text-6xl text-xl`}>SRotify</div>
                <div className={`flex justify-center h-40 sm:h-80 w-5/5 ${theme.background8} bg-opacity-60 m-4 rounded-xl`}>
                    <img src = {process.env.PUBLIC_URL + "/images/search.png"} className="m-4"/>
                    <div className="flex flex-col justify-center mr-4">
                        <div className="font-bold text-blue-400 text-s sm:text-3xl"> Welcome to SRotify!</div>
                        <div className="font-bold text-blue-300 mt-2 text-xs sm:text-2xl"> Start Searching Artists!</div>
                        <div>
                            <Link to ="/search"><button className={`flex w-full justify-center mt-2 ${theme.background10} rounded-2xl p-2`}>
                            <div className='flex mt-1 justify-center items-center'><IoSearchOutline color='white'/></div>
                            <div className='mx-2 text-white font-semibold'>Search Here</div>
                            </button></Link>
                        </div>
                    </div>
                </div>
            
            </div>
            <OtherArtist/>
            <NavBar/>

        </div>
    )
}