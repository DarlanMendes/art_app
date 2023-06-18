'use client'


import { createContext, useState } from "react";

interface ThemeContextType{
    theme:string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}
interface ThemeProviderProps{
    children:React.ReactNode;
}
export const ThemeContext = createContext<ThemeContextType>({theme:'light', setTheme:()=>{}})

export const ThemeProvider: React.FC<ThemeProviderProps>=({children})=>{
    const [theme, setTheme]= useState<string>('light')
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}