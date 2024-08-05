import TodoItem from "../TodoItem/TodoItem";


function TodoList({todos}) {
    return(
        <div>
            {
                todos.map((todo)=>{
                    return(
                        <TodoItem key={todo.id} todo={todo}/>
                    )
                })
            }
        </div>
    );
}

export default TodoList