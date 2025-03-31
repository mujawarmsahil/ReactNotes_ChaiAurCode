import {useState} from "react"
import {useToDo} from "../Contexts/index"
function TodoForm() {
    const [todo,setTodo] = useState("");
    const {addToDo} = useToDo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return 

        addToDo({todo,completed:false}) // if the key and value having same name then we can give a single parameter as value and key both
        setTodo("");
    }
    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;