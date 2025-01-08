# Props in React

## What are Props?
- Props (short for properties) are a mechanism for passing data from parent to child components in React.
- They are read-only and cannot be modified by the child component.

## How to Use Props
1. **Passing Props**: Props are passed to a child component as attributes in the parent component.
    ```jsx
    <ChildComponent propName="propValue" />
    ```

2. **Accessing Props**: In the child component, props can be accessed using `this.props` (for class components) or directly as function arguments (for functional components).
    ```jsx
    // Class Component
    class ChildComponent extends React.Component {
      render() {
        return <div>{this.props.propName}</div>;
      }
    }

    // Functional Component
    const ChildComponent = (props) => {
      return <div>{props.propName}</div>;
    };
    ```

## Prop Types
- Prop types are used to enforce the type and presence of props.
- React provides a library called `prop-types` for this purpose.
    ```jsx
    import PropTypes from 'prop-types';

    ChildComponent.propTypes = {
      propName: PropTypes.string.isRequired,
    };
    ```

## Default Props
- Default props can be defined to ensure that a component has a fallback value if a prop is not provided.
    ```jsx
    ChildComponent.defaultProps = {
      propName: 'defaultValue',
    me: 'defaultValue',
        };
        ```

    ## Props with Arrays of Objects
    - Props can also contain complex data structures like arrays of objects.
    - You can pass an array of objects as a prop and iterate over it in the child component.

    ### Example
    1. **Passing an Array of Objects as a Prop**:
        ```jsx
        const data = [
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' },
        ];

        <ChildComponent items={data} />
        ```

    2. **Accessing and Rendering the Array of Objects**:
        ```jsx
        // Functional Component
        const ChildComponent = ({ items }) => {
          return (
            <ul>
              {items.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          );
        };

        // Class Component
        class ChildComponent extends React.Component {
          render() {
            return (
              <ul>
                {this.props.items.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            );
          }
        }
        ```

    3. **Prop Types for Arrays of Objects**:
        ```jsx
        import PropTypes from 'prop-types';

        ChildComponent.propTypes = {
          items: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
            })
          ).isRequired,
        };
        ```
    };
    ```

## Summary
- Props are essential for passing data and event handlers to child components.
- They help in creating reusable and dynamic components.
- Using prop types and default props can improve the robustness and readability of your code.

