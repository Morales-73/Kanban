import { createContext,useContext,useReducer,useEffect } from "react";
import {initialState, storeReducer} from "./StoreReducer";

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {

    const taskFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))

    const [state, dispatch] = useReducer(storeReducer,initialState)

    useEffect(() => {
        localStorage.getItem("tasks") && dispatch({type:"localStorageTasks",taskFromLocalStorage})
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks))
    }, [state.tasks])

    return(
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext)[0]
export const useDispatch = () => useContext(StoreContext)[1]