# Context API 

-   Suppose we have a main component and its passing data with the help of props to his child components but some of them don't require the handle the data but still they are handling it .Its also knows as **Props Drilling**.In early stages of react this was only way to pass data to required component from parent component.
-   It was not that much optimized approach so for that purpose there is **context API**
context API is purely associated with react and it only exists in react but there was same problem in vite as well as some libraries like backbone.js
-   Redux is a standalone state management library which used to pass the states in organized manner which are used in all libraries to optimize the props drilling way of passing state
-   In react if we want use react then we have react-redux .Redux is also know as Redux-tool kit(RTK) 
Another example of state management library :- zustand

##  Context Creation example
1.  At first make separate folder to store all contexts because we may have different types of context as per usage like as LoginPage context , dashboard context ,user context ,product context , cart context
2.  In that folder create a file with JS extension because it often contains pure and pure javascript

-   UserContext.js -    first we need to create a context
```JavaScript 
import React from "react"
const UserContext  = React.createContext();
export default UserContext;
```

3.  In next step we need a context provider which provide context whenever it needed.Every context is a provider and we apply  this as a wrapper to it eventually like as 
```jsx
<UserContext.Provider value={}>
    <Card/>
    <EducationDetails>
        <Schooling>
        <College>
    </EducationDetails>
</UserContext.Provider>    
```
Whatever we are placing inside the UserContext.Provider will get access of values passed in the UserContext

See the first project to visualize it