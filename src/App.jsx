import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [todos,setTodos]= useState([
    {id:Math.random(),text:"React.js",complated:false},
    {id:Math.random(),text:"Vue.js",complated:false},
    {id:Math.random(),text:"Next.js",complated:false},
  ])

  return (
    <div className="App">
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
