import {createContext , useContext} from "react" // imported createContext and useContext 

export const ThemeContext = createContext({ // created a context with default values 
    theme : "light",
    darkSwitcher : ()   =>  {},
    lightSwitcher : ()  =>  {},
});

export const ThemeProvider = ThemeContext.Provider // hold a context provider in a variable and exported in it

export default function useTheme(){ // this function help to use context without importing to useContext and context separately and all the values are available in this context 
    return useContext(ThemeContext)
}