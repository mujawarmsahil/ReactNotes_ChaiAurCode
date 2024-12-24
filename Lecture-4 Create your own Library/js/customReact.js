function render(reactElement,root){
    //brute force approach
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("href",reactElement.props.target);
    // root.appendChild(domElement);

    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;

    for(const prop in reactElement.props)
    {
        element.setAttribute(prop,reactElement.props.prop);
    }

    root.appendChild(element);
}
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank",
    },
    children : "Click me to visit google"
}

const root = document.getElementById("root");

render(reactElement,root);
