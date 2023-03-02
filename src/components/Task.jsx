import React, { useState, useRef } from "react"
import { useDispatch } from "../store/StoreProvider"

export function Task({taskId,bgTask,titleTask,columnIdReplace,tasks}) {

  const dispatch = useDispatch()

    const textAreaRef = useRef()

    const [stateRemoveIcon, setStateRemoveIcon] = useState(false)

    const [taskIdReplace, setTaskIdReplace] = useState(0)

    const onDragStart = (e,taskId) => {
      e.dataTransfer.setData("taskId", taskId)
    }

    const onDragOver = (e,taskId) =>{
        e.preventDefault()
        setTaskIdReplace(taskId)
    }

  const onDropTask = (e) => {
    const taskId = e.dataTransfer.getData("taskId")

    const tasksCopy = [...tasks]

    //Selected task
    const taskSwap = tasksCopy.find(task => task.id === taskId)
    const indexSwap = tasksCopy.indexOf(taskSwap)

    //task to replace
    const taskReplace = tasksCopy.find(task => task.id === taskIdReplace)
    const indexReplace = tasksCopy.indexOf(taskReplace)

    if (taskSwap.columnTask === taskReplace.columnTask) {
      if (taskSwap.id !== taskReplace.id) {
        const replace = tasksCopy.splice(indexReplace, 1, taskSwap)[0]
        tasksCopy.splice(indexSwap, 1, replace)
        dispatch({type:"onDropTask",tasksCopy})
      }else {

      }
    }else{
      const taskSwapCol = taskSwap.columnTask
      taskSwap.columnTask = columnIdReplace
      tasksCopy[indexSwap] = taskReplace
      taskReplace.columnTask = taskSwapCol
      tasksCopy[indexReplace] = taskSwap
      dispatch({type:"onDropTask",tasksCopy})
    }
  }

  return (
    <>
        <div className={`relative ${bgTask} rounded-md drop-shadow-xl hover:cursor-pointer mb-5`}
        onMouseEnter={()=>setStateRemoveIcon(true)}
        onMouseLeave={()=>setStateRemoveIcon(false)}
        draggable
        onDragStart={(e)=>onDragStart(e,taskId)}
        onDragOver={(e)=>onDragOver(e,taskId)}
        onDrop={(e)=>onDropTask(e)}
        >

        <textarea id={taskId} ref={textAreaRef} value={titleTask} onChange={()=>dispatch({type:"changeTitleTask",taskId,textAreaRef})}
        className={`rounded-md ${bgTask} p-3 h-24 hover:cursor-pointer w-full focus:outline-none resize-none`}>
        </textarea>

          {stateRemoveIcon ?
            <button className="absolute top-3 right-3" onClick={()=>dispatch({type:"removeTask",taskId})}><i className="fi fi-sr-trash"></i></button>
            : null
          }

      </div>
    </>
  )
}