# TodoAppWithContext

## React Context

React Context is a way to manage state globally.

### Creating Context

To create context, you must import `createContext` and initialize it:

### Context Provider
Wrap child components in the Context Provider and supply the state value.

In order to use the Context in a child component, we need to access it using the `useContext` Hook.


![React Context](https://scrimba.com/articles/content/images/size/w1000/2023/02/Prop-Drilling-versus-Context-API-4.png)



## React useReducer Hook


The `useReducer` Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.


useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

The useReducer Hook returns the current stateand a dispatchmethod.



![React useReducer](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_lF6YmjuUxxYyTdMqMVTDw.png)










