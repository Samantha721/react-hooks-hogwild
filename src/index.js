import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';


/*
Thinking in React: https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy

  App
  ├───Nav
  └───ItemList
      ├───Item
      └───Filter
      └───Sort

Step 2: Build A Static Version in React


Step 3: Identify The Minimal (but complete) Representation Of UI State

- The original list of products (don't need state)
- The category value of the filter (need state)
- The value of the checkbox (need state)
- The filtered list of products


- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.


Step 4: Identify Where Your State Should Live

Step 5: Add Inverse Data Flow
*/



ReactDOM.render(<App />, document.getElementById('root'));
