function ToDo({todo,toggleTask,RemoveTask}){
    return (
        <div key={todo.id} className="item-todo">
            <div
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}

            </div>
            <button className="item-delete" onClick={ () => RemoveTask(todo.id)}>X</button>

        </div>
    )

}
export default ToDo;