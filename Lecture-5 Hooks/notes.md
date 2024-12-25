#   Hook
This are special type of function / methods which are used to update the UI and data
UI update  is controlled by React hence for this purpose hooks are used

-   Whenever working with hooks first need to import them . syntax is
    import {useState} from "react"
    *   All hooks are present in react module
    1)  useState is responsible for changing the state which are later propagated in DOM
        useState contain default value at first like as const [varName,setVarName] = useState(defaultValue)
        Explanation :- const [varName,setVarName] = useState(defaultValue)
                        -   internally it is a varName is a variable and setVarName is a function which is used to update the varName.It just a convention for putting method name same as varName with set Its not compulsory.
                        -   and useState contains a default value which is assigned to varName at the beginning phase.
                        -   Add a logic where you want to update the UI and call the function an with the updated parameter 
                        -   now all places where the particular state is present are updated in the  UI.
                        IMP - hooks should be present at the top in the component 

```JavaScript  

import React , {useState} from "React";
import ReactDOM from "react-dom";

function App(){
    let[counter,setCounter] = useState(10);

    incrementValue(){
        if(counter < 20)
            setCounter(counter+1);
    }

    decrementValue(){
        if(counter > 0)
            setCounter(counter-1);
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
```

