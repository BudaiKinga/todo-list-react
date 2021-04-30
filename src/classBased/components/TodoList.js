import React from "react"
import TodoItem from "./TodoItem";


class TodoList extends React.Component {
    render() {
        return (
            /* since we are doing a map on todos (this.props.todos.maps) we must add key to avoid warning*/
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                        setUpdate={this.props.setUpdate}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList
