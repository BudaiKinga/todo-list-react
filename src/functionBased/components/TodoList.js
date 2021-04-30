import React from "react"
import TodoItem from "./TodoItem";


const TodoList = (props) => {

    return (
        /* since we are doing a map on todos (this.props.todos.maps) we must add key to avoid warning*/
        <ul>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
    }

export default TodoList
