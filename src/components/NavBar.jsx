import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const NavBar = () => {

    const { todos } = useContext(ToDoContext);
    return ( 
        <div className="nav-bar">
            <h2>simple to-do-list</h2>
            <p>What are you doing today?</p>
        </div>
    )    

};
 
export default NavBar;