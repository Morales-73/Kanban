import React, { useState } from "react"
import { useDispatch } from "../store/StoreProvider"
import { Task } from "./Task"

export function ContainerTask({columnId,tasks}) {

    const dispatch = useDispatch()

    const [columnIdReplace, setColumnIdReplace] = useState(0)

  const onDragOver = (e,columnId) => {
    e.preventDefault()
    setColumnIdReplace(columnId)
  }

  const onDrop = (e,columnId) => {
    const taskId = e.dataTransfer.getData("taskId")

    const tasksCopy = [...tasks]

    const taskSwap = tasksCopy.find(task => task.id === taskId)
    const taskSwapIndex = tasksCopy.indexOf(taskSwap)

    if (taskSwap.columnTask !== columnId) {

      const taskRemoveColumn = tasksCopy.splice(taskSwapIndex,1)[0]
      taskRemoveColumn.columnTask = columnIdReplace
      
      tasksCopy.splice(0,0,taskRemoveColumn)

      dispatch({type:"onDropTask",tasksCopy})
    } else {

    }
  }

  return (
    <>
        <div className="h-full pt-2 overflow-auto scrollbar-none"
        onDragOver={(e)=>onDragOver(e,columnId)}
        onDrop={(e)=>onDrop(e,columnId)}
        >
          {tasks.map(task =>
              task.columnTask === columnId ? <Task key={task.id} taskId={task.id} bgTask={task.bgTask} titleTask={task.title} columnIdReplace={columnIdReplace} tasks={tasks}/> : null
          )}
        </div>
    </>
  )
}