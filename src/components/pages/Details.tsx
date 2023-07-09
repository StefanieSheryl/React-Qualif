import { useQuery } from "@apollo/client"
import { GET_ALLDATA } from "../lib/queries/FetchData"
import { useParams } from "react-router-dom";
import { Caraousel } from "../homePage/Carousel";
import NavBar from "../navBar/NavBar";
import { ThemeContext } from "../lib/context/ThemeContext";
import { useContext } from "react";

export default function Details(){
    let theme = useContext(ThemeContext)

    let {artistName} = useParams();
    const{loading, error,data} = useQuery(GET_ALLDATA, {
        variables:{
            name : artistName
        }
    })
    //console.log(data)
    if(loading) return (
        <div className={`
                        w-full
                        h-screen
                        ${theme.background2}
                        background-animate
                        `}>
            <div className={`${theme.background8} bg-opacity-30`}>
                <div className="flex items-center justify-center h-screen">
                    <div className="inline-flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="flex m-4 font-semibold text-4xl sm:text-6xl text-white">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
    else if(error) return (
        <div className ="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Oops! Something went wrong.</strong>
            <span className="block sm:inline">Please try again later.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 6.066 4.652a1 1 0 00-1.414 1.414L8.586 10l-3.934 3.934a1 1 0 101.414 1.414L10 11.414l3.934 3.934a1 1 0 001.414-1.414L11.414 10l3.934-3.934a1 1 0 000-1.414z"/>
                </svg>
            </span>
        </div>
    )

    return(
        <div>
            <Caraousel data ={data}/>
            <NavBar/>
        </div>
    ) 

}