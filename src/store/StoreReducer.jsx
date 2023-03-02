import { v4 as uuidv4 } from 'uuid';

export const initialState = {
    columns: [
        {id:1,title:'🃏 TODO',bgTitle:"bg-zinc-200",colorTitle:"text-zinc-900",colorColumn:"bg-slate-50"},
        {id:2,title:'📈 IN PROGRESS',bgTitle:"bg-blue-200",colorTitle:"text-blue-900",colorColumn:"bg-slate-50"},
        {id:3,title:'❌ BLOCKED',bgTitle:"bg-red-200",colorTitle:"text-red-900",colorColumn:"bg-slate-50"},
        {id:4,title:'✔️ COMPLETED',bgTitle:"bg-emerald-200",colorTitle:"text-emerald-900",colorColumn:"bg-slate-50"},
    ],
    tasks: [],
}

export const storeReducer = (state,action) => {

    switch (action.type) {
        case "addTask":
            const colorsList = ["bg-emerald-500","bg-teal-500","bg-sky-500","bg-yellow-500","bg-red-500","bg-violet-500"]

            const numRandom = Math.floor(Math.random() * colorsList.length)
  
            const taskColor = colorsList[numRandom]

            const newTask = {id: uuidv4(),title: "",columnTask: Number(action.id),bgTask: taskColor}

            return {
                ...state,
                tasks: [newTask,...state.tasks]
            }
        case "removeTask":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id != action.taskId)
            }
        case "removeAllTask":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.columnTask != action.id)
            }
        case "localStorageTasks":
            return {
                ...state,
                tasks: action.taskFromLocalStorage
            }
        case "changeTitleTask":
            const task = state.tasks.find(task => task.id === action.taskId)
            task.title = action.textAreaRef.current.value

            return {
                ...state,
                tasks: [...state.tasks]
            }
        case "onDropTask":
            return {
                ...state,
                tasks: action.tasksCopy
            }
        default:
            return state
    }
}