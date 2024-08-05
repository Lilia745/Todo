import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoFooter from './Components/TodoFooter/TodoFooter';

function App() {
  const [todos,setTodos]= useState([
    {id:Math.random(),text:"React.js",complated:false},
    {id:Math.random(),text:"Vue.js",complated:false},
    {id:Math.random(),text:"Next.js",complated:false},
  ])

  return (
    <div className="App">
      <p>todos</p>
      <div className="root">
        <TodoForm onAdd={(text)=>{
          setTodos([
            ...todos,
            {id:Math.random(),text:text,complated:false}
          ])
        }}/>
        <TodoList 
            todos={todos} 
            onDelete={(todo)=>{
              setTodos(todos.filter((t)=> t.id != todo.id))
            }} 
            onChange={(newTodo)=>{
              setTodos(todos.map((todo)=>{
                if (todo.id === newTodo.id) {
                  return newTodo
                }
                return todo
              }))
            }}/>
        <TodoFooter todos={todos} onClear={()=>{
          setTodos(todos.filter((todo) => !todo.complated))
        }}/>
      </div>
    </div>
  );
}

export default App;
