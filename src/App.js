import {useState} from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function App() {
  const [todos,setTodos ] = useState([])

  const addTask = (userInput) => {
      if (userInput){
          const newItem = {
              id: Math.random().toString(36).substr(2,9),
              task:userInput,
              complete:false,
          }
          setTodos([...todos,newItem])
      }
  }
  const RemoveTask = (id) => {
      setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const handelToggle = (id) => {
      setTodos([
          ...todos.map((todo) =>
          todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
          )
      ])
  }


  return (
    <div className="App">
      <header>
        <h1>Список дел: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
            <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handelToggle}
                RemoveTask={RemoveTask}
            />
        )
      })}
    </div>
  );
}

export default App;
