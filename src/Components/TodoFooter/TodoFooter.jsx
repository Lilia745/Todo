function TodoFooter({todos, onClear}) {

    const complated = todos.filter((todo)=> todo.complated).length
    return(
        <div className="footer"> 
            <span>{complated}/{todos.length} Complated</span>
            <button onClick={onClear}> Clear Complated</button>
        </div>
    );
}

export default TodoFooter