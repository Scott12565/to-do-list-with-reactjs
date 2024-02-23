import React from "react";
import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import ToDoContextProvider from "./context/ToDoContext";
function App() {
  return (
    <div className="App">
      <ToDoContextProvider >
        <NavBar />
        <ToDoList />
      </ToDoContextProvider>
    </div>
  );
}

export default App;
