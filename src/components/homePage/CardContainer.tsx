import { ThemeContext } from "../lib/context/ThemeContext";
import { useContext } from "react";

interface Props{
    datas ?: String
}

export function CardContainer({...prop} : Props){
        
    let theme = useContext(ThemeContext)

        return(
            <div className={`flex min-h-max ${theme.background7} bg-opacity-40 rounded-3xl m-4`}>
                <div className="flex flex-row h-2/6">
                    <div className="flex items-center justify-center m-4 w-12 h-12">
                    <img src = {process.env.PUBLIC_URL + "/images/" + prop.datas + ".jpeg"} alt=""></img>
                    </div>
                    <div className="flex text-xl sm:text-xl items-center justify-center font-medium text-white">{prop.datas}</div>
                </div>   
            </div>
        )
}