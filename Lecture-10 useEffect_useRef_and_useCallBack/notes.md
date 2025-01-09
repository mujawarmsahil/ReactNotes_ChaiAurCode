# Lecture 10: `useEffect`, `useRef`, and `useCallback`

## `useEffect`
- The `useEffect` hook allows you to perform side effects in function components.
- It is similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
- Syntax:
    ```javascript
    useEffect(() => {
        // Your side effect code here
        return () => {
            // Cleanup code here (optional)
        };
    }, [dependencies]);
    ```

- The second argument is an array of dependencies. The effect runs when any dependency changes.
- If the second argument is an empty array, the effect runs only once after the initial render.

## `useRef`
- The `useRef` hook returns a mutable ref object whose `.current` property is initialized to the passed argument.
- It can be used to access a DOM element directly.
- Syntax:
    ```javascript
    const myRef = useRef(initialValue);
    ```
- Example:
    ```javascript
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    ```

## `useCallback`
- The `useCallback` hook returns a memoized callback function.
- It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
- Syntax:
    ```javascript
    const memoizedCallback = useCallback(() => {
        // Your callback code here
    }, [dependencies]);
    ```
- Example:
    ```javascript
    const handleClick = useCallback(() => {
        console.log('Button clicked');
    }, []);
    ```

## Summary
- `useEffect` is used for side effects.
- `useRef` is used for accessing DOM elements and persisting values across renders.
- `useCallback` is used for memoizing functions to optimize performance.

## Interview Question
- What are the use cases for `useEffect`, `useRef`, and `useCallback` hooks in React?
    - `useEffect` is used for performing side effects such as data fetching, subscriptions, or manually changing the DOM.
    - `useRef` is used for accessing and interacting with DOM elements directly, as well as persisting values across renders without causing re-renders.
    - `useCallback` is used for memoizing functions to prevent unnecessary re-renders of child components that rely on reference equality.
- Explain the difference between `useEffect` and `useLayoutEffect`.
    - `useEffect` runs asynchronously after the render is committed to the screen, while `useLayoutEffect` runs synchronously before the browser has painted. `useLayoutEffect` is useful for reading layout from the DOM and synchronously re-rendering.
- How does the dependency array in `useEffect` and `useCallback` work?
    - The dependency array determines when the effect or callback should be re-run. If any value in the array changes, the effect or callback is re-executed. An empty array means it runs only once after the initial render.
- What is the purpose of the cleanup function in `useEffect`?
    - The cleanup function is used to clean up side effects such as removing event listeners, canceling network requests, or clearing timers. It runs before the component unmounts or before the effect re-runs due to a dependency change.
- When would you use `useRef` instead of `useState`?
    - Use `useRef` when you need to persist a value across renders without causing a re-render. `useState` should be used when you need to trigger a re-render in response to state changes.
- How can `useCallback` help optimize performance in React applications?
    - `useCallback` helps optimize performance by memoizing functions, preventing unnecessary re-renders of child components that rely on reference equality. This is particularly useful when passing callbacks to components wrapped in `React.memo`.


    ### HTML Example

#### `useEffect`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>useEffect Example</title>
</head>
<body>
    <div id="app"></div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Component mounted');
            return () => {
                console.log('Component unmounted');
            };
        });
    </script>
</body>
</html>
```

#### `useRef`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>useRef Example</title>
</head>
<body>
    <input type="text" id="input" />
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const input = document.getElementById('input');
            input.focus();
        });
    </script>
</body>
</html>
```

#### `useCallback`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>useCallback Example</title>
</head>
<body>
    <button id="button">Click me</button>
    <script>
        const handleClick = () => {
            console.log('Button clicked');
        };
        document.getElementById('button').addEventListener('click', handleClick);
    </script>
</body>
</html>
```

### React Example

#### `useEffect`
```javascript
import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return <div>Check the console for messages</div>;
}

export default App;
```

#### `useRef`
```javascript
import React, { useRef, useEffect } from 'react';

function App() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type="text" />;
}

export default App;
```

#### `useCallback`
```javascript
import React, { useCallback } from 'react';

function App() {
    const handleClick = useCallback(() => {
        console.log('Button clicked');
    }, []);

    return <button onClick={handleClick}>Click me</button>;
}

export default App;
```
