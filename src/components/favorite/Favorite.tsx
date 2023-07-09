import { useEffect, useState } from "react"
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

interface Props{
    artist ?: any,
    album ?: any,
    track ?: any
}

export default function FavouriteButton({...props} : Props){
    const [isFav, setIsFav] = useState(Boolean)

    const refresh = () =>{
        let favListStorage = localStorage.getItem("favorite")
        if(!favListStorage){
            setIsFav(false)
            //console.log(props.data + "false")
        }else{
            setIsFav(false)
            let favList = JSON.parse(favListStorage)
            favList.map((fav:any)=>{
                if(fav["track"] === props.track){
                    setIsFav(true)
                    return 1
                } 
                return 0
            })
        }
    }

    useEffect(()=>{
        refresh()
    })

    const handleClick = (e : any) =>{
        if(isFav === false){
            let favListStorage = localStorage.getItem("favorite")
            let favList;
            if(!favListStorage){
                favList = []
            }else{
                favList = JSON.parse(favListStorage)
            }
            favList = [...favList, {
                "artist" : props.artist,
                "album" : props.album,
                "track" : props.track
            }]
            localStorage.setItem("favorite", JSON.stringify(favList))
            setIsFav(true)
            refresh()
        }else{
            let favListStorage = localStorage.getItem("favorite")
            let favList;
            if(!favListStorage){
                favList = []
            }else{
                favList = JSON.parse(favListStorage)
            }

            favList = favList.filter((e : any) => e["track"] !== props.track)

            localStorage.setItem("favorite", JSON.stringify(favList))
            setIsFav(false)
            refresh()
        }
    }

    return(
        <div className="flex">
            {isFav === true? 
            (<button onClick={handleClick}>
                <AiFillHeart color="white"/>
            </button>) : (<button onClick={handleClick}> <AiOutlineHeart color="white"/> </button> )}
        </div>
    )

}