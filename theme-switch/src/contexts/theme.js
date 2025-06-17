// 2

import { createContext,useContext } from "react";


export const ThemeContext=createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
});


export const ThemeProvider=ThemeContext.Provider  ///this is the provider benift of this is that we can use this provider in any file and we can use the value of this provider in any file

export default function useTheme(params) {      ///thsts a custom hooks 
    return  useContext(ThemeContext)             ///so now u donot tneed to import useContext and ThemeContext in every file
   
}







