import { useEffect, useState } from 'react'
import './App.css'
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn"
import { ThemeProvider } from './contexts/theme'

function App() {
  const [theme,setThemeMode] = useState("light"); // for setting the current theme of page
  const darkSwitcher = ()=>{ // logic of darkSwitcher method which is provided by ThemeProvider
    setThemeMode("dark")
  }

  const lightSwitcher = () => { // logic of themeSwitcher method which is provided by ThemeProvider
    setThemeMode("light")
  }

  //Actual change in  DOM 
  useEffect(()=>{ // useEffect will run the callback whenever the components within ThemeProvider calls the lightSwitcher and darkSwitcher
    const HTML = document.querySelector("html"); // taken parent element of DOM 
    HTML.classList.remove("light","dark"); // removed both classes from element 
    HTML.classList.add(theme); // added the current  value of theme as class in it
  },[theme])

  return (
    <ThemeProvider value={{theme,darkSwitcher,lightSwitcher}}> {/*If we have values having same name as methods or variables in a particular component then the logic or value for that particular method or variable present is value object of provider is assigned same as local component .Means if we use a contextProvider in card component and passing values like title , desc in it and the component also contain variable having same name as title and desc then the values of local variables are assigned to variables which are in ThemeProvider's values object */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>         
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>          
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
