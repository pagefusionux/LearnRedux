# LearnRedux

- Install Redux
  - `$ npm install redux@3.3.1 --save-dev`

- Install redux-thunk (allows you to write action creators that return a function instead of an action. This "thunk"
  can then be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. This is
  great for promises, callbacks, asynchronous calls, etc.)
  A "thunk" is a function that wraps an expression to delay its evaluation.
  - `$ npm install redux-thunk@2.0.1 --save-dev`

- Additional folders/files added to support modular inclusion of Redux functionality:
  - /actions
    - /index.jsx
  - /reducers
    - /index.jsx
  - /store
    - configureStore.jsx
  
- This project utilizes http://ipinfo.io
  - Takes your IP and returns your location on a map.
    - 
  
- 

---
Udemy Tutorial:
https://www.udemy.com/the-complete-react-web-app-developer-course
