import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { GitHubInfoLoader } from './components/Github/Github'
//Ways to create browser router
// const router = createBrowserRouter([
//     {
//         path : "/",
//         element : <Layout/>,
//         children : [
//           {
//             path : "",
//             element : <Home/>,
//           } , 
//           {
//             path : "about",
//             element : <About/>
//           } , 
//           {
//             path : "contact",
//             element : <Contact/>
//           } , 
          
//         ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
        path='/' 
        element={<Layout/>}>
              <Route 
                path='' 
                element={<Home/>}/>
              <Route 
                path='contact' 
                element={<Contact/>}/>
              <Route 
                path='about' 
                element={<About/>}/>
              <Route 
                path='user/:userid' // this is a way to pass parameters to a component by URL manipulation and important point is when we are going to access the parameter then we should follow same naming convention as it is in path 
                element={<User/>}/>
              <Route 
                loader = {GitHubInfoLoader} // its a property in routing which allow developer to precompute the logic and send it to that particular component  we can pass callback function also and in that we use {params} as parameter like as object we can drill params for required values 
                path='github' 
                element={<Github/>}/>
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
