import React, { createContext,useEffect,useState } from 'react'

export const themeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState({bgTheme:"bg-white",colorTheme:"text-black",columnTheme:"bg-slate-50"})

    useEffect(() => {
        localStorage.getItem("themeKanban") && setTheme(JSON.parse(localStorage.getItem("themeKanban")))
    }, [])
    

    const changeTheme = (theme) => {
        switch (theme) {
            case "white":
                localStorage.setItem("themeKanban",JSON.stringify({bgTheme:"bg-white",colorTheme:"text-black",columnTheme:"bg-slate-50"}))
                return setTheme({bgTheme:"bg-white",colorTheme:"text-black",columnTheme:"bg-slate-50"})
            case "black":
                localStorage.setItem("themeKanban",JSON.stringify({bgTheme:"bg-slate-900",colorTheme:"text-white",columnTheme:"bg-stone-700"}))
                return setTheme({bgTheme:"bg-slate-900",colorTheme:"text-white",columnTheme:"bg-stone-700"})
            default:
                return setTheme({bgTheme:"bg-white",colorTheme:"text-black",columnTheme:"bg-slate-50"})
        }
    }

  return (
    <themeContext.Provider value={{theme,changeTheme}}>
        {children}
    </themeContext.Provider>
  )
}