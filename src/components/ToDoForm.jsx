import { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoForm = () => {
    const { dispatch } = useContext(ToDoContext);
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
    

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'addTask', todo: {task, time}});
        setTask('');
        setTime('');
    };
            
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="add a task..." required value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <input type="time" 
            name="time" 
            required 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            />
            <input type="submit" value="add task" />
        </form>
     );
};
 
export default ToDoForm;