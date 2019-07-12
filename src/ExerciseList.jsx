import React, { useReducer } from 'react';
import Search from './Search';


export default function ExerciseList(props) {
  const [items, dispatch] = useReducer(listReducer, []);
 

  return (
    <React.Fragment>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
      <Search onClick={newItems => dispatch({type: 'ADD', payload: newItems})}/>

    </React.Fragment>
  )
}

// action = { type: ADD_EXERCISE, payload: [hej, kebab, saas]}
const listReducer = (state, action) => {
  switch(action.type) {
    case 'ADD': return [...state, ...action.payload];
    case 'REMOVE': return state.filter(item => action.payload.indexOf(item) === -1);
    default: throw new Error('Unknown action type: ' + action.type)
  }
}
