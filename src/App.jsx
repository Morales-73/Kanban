import { useContext } from "react";
import { ContainerColumns } from "./components/ContainerColumns";
import { themeContext } from "./theme/ThemeProvider";

export function App() {

  const {theme,changeTheme} = useContext(themeContext)

  const {bgTheme,colorTheme} = theme

  return (
    <>
      <div className={`h-screen ${bgTheme} font-medium relative`}>
        <h1 className={`text-5xl py-16 ${colorTheme} text-center`}>Kanban</h1>
        <ContainerColumns/>

        {bgTheme === "bg-white" ? <button className={`absolute top-10 right-10 ${colorTheme}`} onClick={()=>changeTheme("black")}><i className="fi fi-ss-moon text-xl"></i></button> :
        <button className={`absolute top-10 right-10 ${colorTheme}`} onClick={()=>changeTheme("white")}><i className="fi fi-rr-sun text-xl"></i></button>}
      </div>
    </>
  );
}