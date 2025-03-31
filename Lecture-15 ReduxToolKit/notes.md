#REDUX TOOLKIT
-   Libraries just like react-dom which is used for web development and react-native which is used for android application of React .There is one more library which is used to state management in react.
-   Redux is a standalone and independent state management library and if we want to implement it any library then there are the versions of redux for that particular library which help to work with redux.
-   In react we react-redux library which help in state management.
-   Redux is a core library and react-redux is bridge which help to work with redux.

while working with redux and react-redux we need to install both the libraries in project by following command
- npm install @redux/toolkit
- npm install react-redux

1)  Configure a store
2)  Create a reducer and create actions in it
3)  Create slice

Process for creating store 
-   Create a JavaScript file 
-   import configureStore method from @redux/toolkit
-   configureStore always takes object while using
-   create a variable using configureStore having a empty object like as follows
    export const variableName = configureStore({})
-   next steps is creating a reducer which is also known as slice
    for this we need another JavaScript file and import createSlice from toolkit .
    Toolkit also contain a method nanoid which is literally used to create unique ID's like as we are using keys
    Create a initial state it can be array or object or  any kind of value 
    create a variable with createSlice() method which takes object generally and give slice name , give initialState of it and reducers which is a object contains properties and functions.
        As we know when we creating a context if we have a function then we always define a blank  / void definition for it .But when we are declaring reducer always define definition for that particular functions .
        In every function we have access of two things first is `state` and `action` 
        `state` always give data which is present in initial state on that time.
        `action` gives values to developer which are required for performing operations like as removing a todo from list we require ID etc from action.payload object.
-   After defined slice export  the reducers method separately and also provide reducer .
   ` export const {addTodo,removeTodo} from todoSlice.actions`
   ` export default todoSlice.reducer`
-   Now got to the file in which we have created store and in that we used a method configureStore({}) which is initially giving a empty object .so in that just add a property name `reducer` and value `todoSlice.reducer` provided by the slice file.
-   The property reducer in configureStore contains two methods
    useSelector() :- this method is used to select a particular value
    useDispatch() :- this is used to get the values