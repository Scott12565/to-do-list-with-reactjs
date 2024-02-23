import { useContext } from "react";
import ToDoForm from "./ToDoForm";
import { ToDoContext } from "../context/ToDoContext";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {

    const { dispatch } = useContext(ToDoContext);
    return ( 
        <div className="to-dos">
            <ul>
                <ToDoListItem dispatch={dispatch} />
            </ul>

            <ToDoForm />
        </div>
     );
};
 
export default ToDoList;