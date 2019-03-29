
- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
Since everything in Javascript is an object. Passing around this loosely typed object around the app without knowing how it can be consumed and in the case of the 
function, what data type is expects in the argument and what data type does it return, a lot of error will occur. With the help of ProTypes library or 
a super set type system like TypeScript, the code become easier to read and maintain. And error can be easily caught at run time.

- [ ] Describe a life-cycle event in React?
React's life-cycle event have three main stages:
1. Mounting stage
2. Updating stage
3. Unmounting stage

During mounting stage, the app first call the class constructors of the root component, get the initial (empty) state object, and use it to render the React Virtual DOM, 
creating a tree-like structure of objects that represent the actual DOM nodes used in WebAPI to represent HTML page structure, style, and user interaction with the page.
Then the Virtual DOM is used to update the DOM on the page. Upon completion, a componentDidMount event will be triggered. This is also the place where developer uses to
add the event listener to receive data from external files or API. 

- [ ] Explain the details of a Higher Order Component?
Higher Order Component is a design pattern that allows a function to take in a function as an argument and return a component to be consumed by the app. It makes sharing 
common code and logic amongst components possible. In the same time, it can house multiple components and conditionally return the component based on certain logic been met. 

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
1. Styled Component
It uses template string literal to include css code into javascript components, making it a reusable and portable encapsulated unit that can be plug into any code we want.

2. Reactstrap
This prebuilt styling library uses the popular Bootstrap to let us easily apply styles and interactions to our components right out of the box.

3. Sass preprocessor
Sass preprocessor is also a great way of making css code more managable 

