### Basic Information
React is a JavaScript library hence end of the day it is a JavaScript. 
Majority of work is done by React js and after injecting in HTML

### Project Structure 
When JavaScript run solo then it only work as JavaScript application but when we have to manipulate the pages or web data we have to inject JavaScript in the HTML.There is not exception for this

1) basic_app
    -   node_module -> It contains dependencies which are present in package.json after installing them
    -   .gitignore -> it contains the files we want to upload on git and which file we don't want to upload like as node_module , build folder etc
    -   package-lock.json -> It contains stable version of dependencies which are required for that particular version
    -   README.md > It is markdown file which contains information about the project
    All work is in public and src folder
    -   public
        -   manifest.json -> This file is useful for mobile devices when we open the application in mobile devices then the meta data required for this is read by the manifest.json file .
        manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        -   robot.txt -> It is for search engine
        * Important files
        -   index.html -> It is main page which loads on browser and all work done in a single index.html file thats why it is called as single page application(SPA)
                noscript -> it is a tag used in html file for scenario like some devices not support js so at that time we need to show a message like `you have to enable JavaScript to run this app`
    -   src
        -   index.js -> It is a entry point of application and we can give any name to this
            a)  ReactDOM is own react Dom which is called as virtual DOM
            b)  This ReactDOM contains one method createRoot(element) which create a root element for the page means parent of all nodes in DOM Tree
            c)  .render() is a method which is used to render another element in  a particular root or variable 
            d)  React.StrictMode is same as "use strict" in js which allow developer to follow the precise programming rules of JavaScript in strict manner
            e)  This virtualDOM compare self with web DOM and render the missing elements or changes in web DOM
            f)  There is dependency in package.json file "react-scripts": "5.0.1" which automatically loads index.js file into index.html even the script tag is not added in html file

2) viteBasic
    -   .jsx files are called as component and when we are making a component then keeping the file name in Capitalize format is a good practice . Developer must keep the function name capitalize in jsx and also while importing the file keep the same convention and we need to export the particular function from the file. Syntax is `export default ComponentName`. 
    -    .jsx file is a file which basically returns a HTML and if we are returning the HTML we must give .jsx extension to the file otherwise it will give error .
    -   If the file only contains js operations at that time we can give .js extension.
    -   project created by create-react-app command also support jsx and follows same convention.  

    ### we can only return one element from jsx .It doesn't matter that one element is contain more element or not means we can save elements into container and return it otherwise we can store all elements in empty element also called as fragment <>elements</>

    Make Sure Component name should be in Capitalized format
    And for best practices keep file name also in Capitalize.

    The script are embedded using major libraries React and ReactDom 