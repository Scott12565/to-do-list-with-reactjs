import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoListItem = ({ dispatch }) => {
    const { todos } = useContext(ToDoContext);

    return ( 
        <>
            {todos.map(todo => {
                return (
                    <li key={todo.id}>
                        <div className="my-to-do">
                            <p>{todo.task}</p>
                            <p>{todo.time}</p>
                        </div>
                        <button onClick={() => dispatch({type: 'removeTask', id: todo.id})} style={{cursor: 'pointer'}}>delete</button>
                    </li>
                )
             })}
        </>
        
     );
}
 
export default ToDoListItem;