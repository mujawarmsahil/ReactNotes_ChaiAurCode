# React Router DOM Notes

## Introduction
React Router DOM is a library used to handle routing in React applications. It allows you to create single-page applications with navigation without the page refreshing as the user navigates.

## Installation
To install React Router DOM, use the following command:
```bash
npm install react-router-dom
```

## Basic Usage
Here is a basic example of how to use React Router DOM:

1. **Import BrowserRouter, Route, and Switch:**
    ```javascript
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    ```

2. **Wrap your application in the Router component:**
    ```javascript
    function App() {
      return (
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      );
    }
    ```

3. **Create your components (Home, About, Contact):**
    ```javascript
    function Home() {
      return <h2>Home</h2>;
    }

    function About() {
      return <h2>About</h2>;
    }

    function Contact() {
      return <h2>Contact</h2>;
    }
    ```

## Navigation
To navigate between different routes, use the `Link` component:
```javascript
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
```

## Conclusion
React Router DOM is a powerful library for handling routing in React applications. It provides a simple and declarative way to manage navigation and rendering of components based on the URL.
## Advanced Topics

### Nested Routes
React Router DOM allows you to create nested routes, which can be useful for complex applications with multiple levels of navigation.

```javascript
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </Router>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <Switch>
                <Route path="/dashboard/profile" component={Profile} />
                <Route path="/dashboard/settings" component={Settings} />
            </Switch>
        </div>
    );
}

function Profile() {
    return <h3>Profile</h3>;
}

function Settings() {
    return <h3>Settings</h3>;
}
```

### Redirects
You can use the `Redirect` component to navigate programmatically.

```javascript
import { Redirect } from 'react-router-dom';

function App() {
    const isLoggedIn = false;

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/dashboard">
                        {isLoggedIn ? <Dashboard /> : <Redirect to="/" />}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
```

### Route Parameters
React Router DOM allows you to pass parameters via the URL.

```javascript
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/user/:id" component={User} />
                </Switch>
            </div>
        </Router>
    );
}

function User({ match }) {
    return <h2>User ID: {match.params.id}</h2>;
}
```

## Interview Questions

1. **What is React Router DOM?**
   React Router DOM is a library used to handle routing in React applications, allowing for navigation without page refreshes.

2. **How do you install React Router DOM?**
   You can install it using the command: `npm install react-router-dom`.

3. **Explain the purpose of `BrowserRouter` in React Router DOM.**
   `BrowserRouter` is used to wrap the entire application and enables the use of the HTML5 history API for cleaner URLs.

4. **What is the difference between `Route` and `Switch` components?**
   `Route` is used to define a path and component to render, while `Switch` is used to group `Route` components and render only the first matching route.

5. **How do you create a nested route in React Router DOM?**
   By defining a `Route` inside another component that is itself a `Route`.

6. **What is the `Link` component used for in React Router DOM?**
   `Link` is used to create navigational links that allow users to navigate to different routes without refreshing the page.

7. **How do you handle redirects in React Router DOM?**
   By using the `Redirect` component to programmatically navigate to a different route.

8. **Explain how to pass parameters in the URL using React Router DOM.**
   Parameters can be passed by defining a route with a parameter (e.g., `/user/:id`) and accessing it via `match.params` in the component.

9. **What is the purpose of the `exact` prop in the `Route` component?**
   The `exact` prop ensures that the route matches exactly, preventing partial matches.

10. **How can you programmatically navigate using React Router DOM?**
    By using the `useHistory` hook to access the history object and call `history.push()`.

11. **What is the difference between `BrowserRouter` and `HashRouter`?**
    `BrowserRouter` uses the HTML5 history API, while `HashRouter` uses the hash portion of the URL.

12. **How do you protect routes in React Router DOM?**
    By using conditional rendering and redirects based on authentication status.

13. **Explain the use of `useHistory` hook in React Router DOM.**
    `useHistory` provides access to the history object, allowing navigation programmatically.

14. **How do you handle 404 pages in React Router DOM?**
    By defining a `Route` without a path at the end of the `Switch` component to catch all unmatched routes.

15. **Can you use React Router DOM with server-side rendering?**
    Yes, but it requires additional configuration with libraries like `react-router-config`.

16. **How do you handle query parameters in React Router DOM?**
    By using the `useLocation` hook to access the query string and parsing it.

17. **What is the `NavLink` component and how is it different from `Link`?**
    `NavLink` is similar to `Link` but provides additional styling options for active links.

18. **How do you animate transitions between routes in React Router DOM?**
    By using libraries like `react-transition-group` to wrap routes with transition components.

19. **Explain the concept of route matching in React Router DOM.**
    Route matching is the process of matching the current URL to a defined route path to render the corresponding component.

20. **How do you test components that use React Router DOM?**
    ## Example for Kids

    Imagine you have a big house with many rooms. Each room has a different purpose: one is for playing, one is for studying, and one is for eating. React Router DOM is like a map that helps you find and go to these rooms without getting lost.

    ### Simple Example

    Let's say you have three rooms: Home, About, and Contact. Here's how you can create a simple map to navigate between these rooms:

    1. **Create the Map (Router):**
        ```javascript
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

        function App() {
          return (
            <Router>
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </div>
            </Router>
          );
        }
        ```

    2. **Define the Rooms (Components):**
        ```javascript
        function Home() {
          return <h2>Home - This is where you start!</h2>;
        }

        function About() {
          return <h2>About - Learn more about us here!</h2>;
        }

        function Contact() {
          return <h2>Contact - Get in touch with us!</h2>;
        }
        ```

    3. **Create Links to Navigate:**
        ```javascript
        import { Link } from 'react-router-dom';

        function Navigation() {
          return (
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          );
        }
        ```

    Now, when you click on "Home", "About", or "Contact", you will go to the respective rooms without the whole house (webpage) reloading. It's like moving from one room to another smoothly!

    ## Interview Questions with Examples

    1. **What is React Router DOM?**
       React Router DOM is a library used to handle routing in React applications, allowing for navigation without page refreshes.
       - **Example:** Imagine you have a book with different chapters. React Router DOM helps you jump to different chapters without flipping through all the pages.

    2. **How do you install React Router DOM?**
       You can install it using the command: `npm install react-router-dom`.
       - **Example:** It's like getting a new tool for your toolbox by downloading it from the internet.

    3. **Explain the purpose of `BrowserRouter` in React Router DOM.**
       `BrowserRouter` is used to wrap the entire application and enables the use of the HTML5 history API for cleaner URLs.
       - **Example:** Think of `BrowserRouter` as the main entrance to a building that lets you access all the rooms inside.

    4. **What is the difference between `Route` and `Switch` components?**
       `Route` is used to define a path and component to render, while `Switch` is used to group `Route` components and render only the first matching route.
       - **Example:** `Route` is like a door to a specific room, while `Switch` is like a hallway that decides which door to open first.

    5. **How do you create a nested route in React Router DOM?**
       By defining a `Route` inside another component that is itself a `Route`.
       - **Example:** It's like having a room inside another room, such as a closet inside a bedroom.

    6. **What is the `Link` component used for in React Router DOM?**
       `Link` is used to create navigational links that allow users to navigate to different routes without refreshing the page.
       - **Example:** `Link` is like a signpost that directs you to different rooms in a house.

    7. **How do you handle redirects in React Router DOM?**
       By using the `Redirect` component to programmatically navigate to a different route.
       - **Example:** It's like putting up a "Detour" sign that redirects you to a different path.

    8. **Explain how to pass parameters in the URL using React Router DOM.**
       Parameters can be passed by defining a route with a parameter (e.g., `/user/:id`) and accessing it via `match.params` in the component.
       - **Example:** It's like sending a letter with a specific address to ensure it reaches the right person.

    9. **What is the purpose of the `exact` prop in the `Route` component?**
       The `exact` prop ensures that the route matches exactly, preventing partial matches.
       - **Example:** It's like having a key that fits only one specific lock.

    10. **How can you programmatically navigate using React Router DOM?**
        By using the `useHistory` hook to access the history object and call `history.push()`.
        - **Example:** It's like having a remote control that lets you change channels on a TV.

    11. **What is the difference between `BrowserRouter` and `HashRouter`?**
        `BrowserRouter` uses the HTML5 history API, while `HashRouter` uses the hash portion of the URL.
        - **Example:** `BrowserRouter` is like a clean address, while `HashRouter` is like an address with a hashtag.

    12. **How do you protect routes in React Router DOM?**
        By using conditional rendering and redirects based on authentication status.
        - **Example:** It's like having a security guard that only lets authorized people enter certain rooms.

    13. **Explain the use of `useHistory` hook in React Router DOM.**
        `useHistory` provides access to the history object, allowing navigation programmatically.
        - **Example:** It's like having a time machine that lets you go back and forth in time.

    14. **How do you handle 404 pages in React Router DOM?**
        By defining a `Route` without a path at the end of the `Switch` component to catch all unmatched routes.
        - **Example:** It's like having a "Room Not Found" sign for rooms that don't exist.

    15. **Can you use React Router DOM with server-side rendering?**
        Yes, but it requires additional configuration with libraries like `react-router-config`.
        - **Example:** It's like setting up a stage for a play that can be viewed from different angles.

    16. **How do you handle query parameters in React Router DOM?**
        By using the `useLocation` hook to access the query string and parsing it.
        - **Example:** It's like reading the fine print on a map to find hidden details.

    17. **What is the `NavLink` component and how is it different from `Link`?**
        `NavLink` is similar to `Link` but provides additional styling options for active links.
        - **Example:** `NavLink` is like a highlighted signpost that shows you are currently on that path.

    18. **How do you animate transitions between routes in React Router DOM?**
        By using libraries like `react-transition-group` to wrap routes with transition components.
        - **Example:** It's like having a smooth sliding door between rooms.

    19. **Explain the concept of route matching in React Router DOM.**
        Route matching is the process of matching the current URL to a defined route path to render the corresponding component.
        - **Example:** It's like matching a key to the correct door.

    20. **How do you test components that use React Router DOM?**
        By using testing libraries like `@testing-library/react` and wrapping components with `MemoryRouter` for isolated testing.
        - **Example:** It's like testing different keys in a lock to ensure they work correctly.

  21. **What's is Difference between Link and NavLink tag in React-Router-DOM?**
    - Link is used in replace on Anchor(<a></a>) tag and when we click on anchor tag then the whole DOM gets refreshed but in react there is not a concept like refreshing so we use Link tag in replace of Anchor tag
      in replace to href we use to in Link
    - NavLink also used for same thing but it have some additional functionalities like as variables isActive isPresent etc we help developer to manipulate the navbar and other component with respect to it

  22. **useLoaderData()** -> Its a hook in react-router-dom which allows us to the calculated values required to show or to provide logic related to that values when your comes to the component  

  23. **The ? operator check if the particular object is present or not.If not then it will not execute the further logic**

   There are basically two ways to create routes using createBrowserRouter() method
    ```jsx
   const router = createBrowserRouter([
    {
         path : "/",
         element : <Layout/>,
         children : [
           {
             path : "",
             element : <Home/>,
           } , 
           {
             path : "about",
             element : <About/>
           } , 
           {
             path : "contact",
             element : <Contact/>
           } , 
          
         ]
     }
  ])

 ```jsx
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
```