import React, { useContext } from "react"
import { useDispatch, useStore } from "../store/StoreProvider"
import { themeContext } from "../theme/ThemeProvider"
import { ContainerTask } from "./ContainerTasks"

export function Column({column}) {

  const {id,title,bgTitle,colorTitle} = column

  const {theme} = useContext(themeContext)

  const {columnTheme,colorTheme} = theme

  const {tasks} = useStore()
  const dispatch = useDispatch()

  return (
    <>
        <div className={`flex flex-col xl:w-1/6 p-3 ${columnTheme} rounded-md drop-shadow-md`}>
            <div className="flex justify-between items-center">
                <h1 className={`${bgTitle} ${colorTitle} text-sm inline px-2 rounded-md`}>{title}</h1>
                <button onClick={() => dispatch({ type:"removeAllTask",id})}><i className={`fi fi-sr-trash ${colorTheme}`}></i></button>
            </div>
            <button className="text-center text-2xl bg-zinc-200 rounded-lg mt-4 mb-3" onClick={() => dispatch({ type:"addTask",id})}>+</button>
            <ContainerTask columnId={id} tasks={tasks} />
        </div>
    </>
  )
}