# Lecture 6: Virtual DOM and Reconciliation

## Virtual DOM
- **Definition**: A lightweight copy of the actual DOM.
- **Purpose**: Improves performance by minimizing direct DOM manipulations.
- **How it works**:
    - React creates a virtual representation of the UI.
    - When the state of an object changes, React updates the virtual DOM.
    - React then compares the virtual DOM with a snapshot of the virtual DOM taken before the update (diffing).
    - Only the differences are updated in the actual DOM.

## Reconciliation
- **Definition**: The process of updating the actual DOM to match the virtual DOM.
- **Steps**:
    - **Diffing**: Comparing the new virtual DOM with the previous one.
    - **Patching**: Applying the differences to the actual DOM.
- **Key Concepts**:
    - **Keys**: Unique identifiers for elements to help React identify which items have changed, are added, or are removed.
    - **Component Lifecycle**: Methods that allow execution of code at specific points in a component's life.

## Benefits of Virtual DOM and Reconciliation
- **Performance**: Reduces the number of direct DOM manipulations, which are costly.
- **Efficiency**: Updates only the parts of the DOM that have changed.
- **Predictability**: Provides a more predictable and manageable way to update the UI.

## Summary
- The virtual DOM is a key concept in React that helps improve performance.
- Reconciliation is the process of updating the actual DOM based on changes in the virtual DOM.
- Using keys and understanding the component lifecycle are important for efficient reconciliation.

## Examples

### Example 1: Virtual DOM Update
```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
```
- **Explanation**: In this example, when the button is clicked, the state `count` is updated. React updates the virtual DOM and then reconciles it with the actual DOM, updating only the part that has changed (the count value).

### Example 2: Using Keys in Lists
```jsx
import React from 'react';

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;
```
- **Explanation**: In this example, each `todo` item is given a unique `key` prop. This helps React efficiently update the list by identifying which items have changed, been added, or removed.



## In my language notes
-   Still virtual DOM is used in React ? 
    ->  NO. React fibre is used.

-    createRoot() method
    It creates a DOM tree like structure in memory and then compare this DOM with the actual DOM wrt that it makes changes in actual DOM. But as we know if we remove the virtual DOM concept and make changes then out browser will reload and repaint(web structure is again creating) the whole DOM called as page reload.

    Question -> Suppose we have a button and it changes UI According to the clicks and takes changes from network.
    But suppose if we clicked a button and making a change instantly at that point a another response comes from the network hence the browser will change the component/part again .So to optimize this we have REACT-fibre.

    Documentation link :- https://github.com/acdlite/react-fibre-architecture
    Summary :- 
    React fibre is now a React's core algorithm which is used to make changes in virtual DOM.Its a upper hand of diffing algorithm.
    1)  Goal of react fibre
        1.  Increase its suitability in areas like animation , layout and gesture because when the virtual DOM changes instantly the most affected elements are animations , layouts . 
            for example :- we receive an change and immediately we receive two more changes from different sides which affect the same part of page .In this scenario the page will make changes 3 times thats why rather than making changes 3 times make the last change.
    2)  Key features :- Ability to pause , reuse or abort work as new updates come in.This is a ability to prioritize different types of updates 

    Hydration process :- When our page is loaded but the JS is remaining at that time the button or other elements doesn't clickable or useful but when the JS is injected properly it will work as expected .
    The process of injecting JS is called as Hydration.

    **Reconciliation** -   The algorithm React used to differentiate one tree with another to determine which parts to be changes os called as reconciliation
    IMP Reconciliation is the algorithm behind the concept virtual DOM means its a virtual DOM.