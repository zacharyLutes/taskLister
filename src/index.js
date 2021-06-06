import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];
console.log(DATA);
ReactDOM.render(
  
    <App tasks={DATA} />, document.getElementById('root'));

document.getElementById("todo-1").addEventListener("click", function(event){
    event.preventDefault()
});

