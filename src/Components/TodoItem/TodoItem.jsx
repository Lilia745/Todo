function TodoItem({todo,onChange,onDelete}) {
    return(
        <div>
            <label className="label">
                <input type="checkbox" checked={todo.complated}  onChange={(e)=>{
                    onChange({
                        ...todo,
                        complated:e.target.checked
                    })
                }}/>
                <p>{todo.text}</p>
                <button onClick={()=>{
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
}
export default TodoItem