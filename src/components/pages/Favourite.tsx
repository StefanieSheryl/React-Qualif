import NavBar from "../navBar/NavBar";
import { ThemeContext } from "../lib/context/ThemeContext";
import { useContext} from "react";
import FavouriteButton from "../favorite/Favorite";

export default function Favourite(){
    let theme = useContext(ThemeContext)
    let favListStorage = localStorage.getItem("favorite")
    let empty;
    let favList;
    if(!favListStorage){
        empty = true
    }else{
        empty = false
        favList = JSON.parse(favListStorage)
        
        if(favList.length === 0){
            empty = true
        }
    }

    //console.log(favList.length)

    return(
        <div>
              <div className={` max-h-max w-screen ${theme.background4} background-animate`}>
                    <div className={`flex items-center justify-center font-semibold text-white p-6 mb-4 ${theme.background1} w-full sm:text-6xl text-xl`}>SRotify</div>
                    <div>
                        {empty === true?(
                            <div className="flex flex-col">
                            <div className={`m-4 p-4 flex text-3xl sm:text-5xl items-center justify-center font-medium text-white ${theme.background1} rounded-xl`}>Favorite List</div>
                        <div className={`flex items-center justify-center m-4 p-4 rounded-xl bg-opacity-70 text-white ${theme.background7} font-semibold text-xl`}> No Fav List, Start Adding Yours Now!</div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        </div>
                        ):
                        (
                        <div className="max-h-max overflow-auto">
                                        <div className={`m-4 p-4 flex text-3xl sm:text-5xl items-center justify-center font-medium text-white ${theme.background1} rounded-xl`}>Favorite List</div>
                         {favList.map((fav:any, index:any) => (
                        <div className={`flex h-3/6 ${theme.background7} bg-opacity-40 rounded-3xl p-2 m-4`}>
                            <div className="flex flex-row">
                                <div className="flex text-2xl sm:text-4xl items-center justify-start font-medium text-white m-4">{index + 1 +"."}</div>
                                <div className="flex flex-col mr-7">
                                    <div className="flex w-full text-lg sm:text-2xl items-center justify-center font-medium text-white overflow-auto mr-2">{fav["track"]}</div>
                                    <div className={`flex text-s sm:text-xl ${theme.text}`}>{fav["artist"]} / {fav["album"]}</div>
                                </div>
                                    {/* <div className={`flex text-s sm:text-xl ${theme.text}`}>{fav["album"]}</div> */}
                                <FavouriteButton artist ={fav["artist"]} album={fav["album"]} track={fav["track"]}/>
                            </div>   
                        </div>
                         ))}
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                        <div className='flex h-16 m-14 bg-transparent'></div>
                         </div>
                        )}
                    </div>

                </div>
                
            <NavBar/>
        </div>
    )
}