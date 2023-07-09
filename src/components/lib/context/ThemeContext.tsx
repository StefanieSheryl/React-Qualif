import { createContext } from "react"


export const THEME ={
    light :{
        background1 : "bg-gradient-to-tr from-purple-200 to-blue-200",
        background2 : "bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400",
        background3 : "bg-purple-200",
        background4 : "bg-gradient-to-r from-purple-300 to-blue-100",
        background5 : "bg-purple-200/80",
        background6 : "bg-blue-100",
        background7 : "bg-purple-300",
        background8 : "bg-white",
        background9 : "bg-gray-400",
        background10: "bg-blue-300",
        text       : "text-gray-500",
        icon       : "white",
    },
    dark :{
        background1 : "bg-gradient-to-tr from-slate-700 to-cyan-700", //
        background2 : "bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-700",//
        background3 : "bg-cyan-800/70",//
        background4 : "bg-gradient-to-r from-slate-700 to-cyan-700",
        background5 : "bg-cyan-800/80",//
        background6 : "bg-slate-700",
        background7 : "bg-cyan-800",
        background8 : "bg-slate-700",//
        background9 : "bg-cyan-700", //
        background10: "bg-slate-700",//
        text       : "text-white",
        icon       : "black",//
    }
}

export const ThemeContext = createContext(THEME.light)