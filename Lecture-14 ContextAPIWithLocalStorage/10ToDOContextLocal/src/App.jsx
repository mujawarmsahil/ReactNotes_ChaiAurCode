import {useState} from "react"
import {ToDoProvider} from "./Contexts/index"
import TodoForm from "./Components/ToDoForm";
import TodoItem from "./Components/ToDoItem";
function App() {
  
  const [todos , setTodos] = useState([]);

  const addToDo = (todo) =>{
    setTodos((prevTodo) => {
      return [...prevTodo,{id:Date.now(),...todo}]
    });
  }

  const updateToDo = (id,todo)=>{
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo)))
  }

  const deleteToDo = (id) =>{
      setTodos((prevToDo) => {prevToDo.filter((prev) => prev.id !== id)})
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
        prevTodos.map((prevTodo) =>
            (prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo)) 
    })
  }
  return (
    <>
      <ToDoProvider value={{todos,addToDo,updateToDo,deleteToDo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((todo) => <TodoItem key={Date.now()} todo={todo}/>)
                        }
                    </div>
                </div>
            </div>
      </ToDoProvider>
    </>
  )
}

export default App
