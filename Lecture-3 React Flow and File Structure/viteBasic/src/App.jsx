import  {useState} from "React";
function App(){
    let[counter,setCounter] = useState(10);

    let incrementValue = ()=>{
        
            setCounter(counter+1)
    
    }

    let decrementValue = () => {
      
            setCounter(counter-1)
    } 

    return(
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={incrementValue}>Increase Value - {counter}</button>
            <button onClick={decrementValue}>Decrease Value - {counter}</button>
        </>
    )
}

export default App;