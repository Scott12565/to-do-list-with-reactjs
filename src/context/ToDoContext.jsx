import { useReducer ,createContext } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    return ( 
        <ToDoContext.Provider value={{todos, dispatch}} >
            {props.children}
        </ToDoContext.Provider>
     );
};
 
export default ToDoContextProvider;