# Internal conversion of elements in React
1. If we think about the function component, when we are using it, it's called like a normal function. The elements returned by it are converted into objects by Babel, which is a transpiler of the React library.
2. React provides a method for creating elements:
    - Syntax: `React.createElement(type, props, ...children)`
    - Example: `const anchorElement = React.createElement('a', { href: "https://google.com", target: "_blank" }, "click me to enter Google", variableName);`

    Basically, whenever we are using variables in a React component, they are known as evaluated expressions. This means we cannot perform conditions and logic where the value will come after processing the logic on it.

## App.jsx
```javascript
import React from "react";
import ReactDOM from "react-dom";

const name = "sahil";
const element = React.createElement("a", { href: "https://google.com", target: "_blank" }, "click me to enter Google", name);

function App() {
    return (
        element
    );
}