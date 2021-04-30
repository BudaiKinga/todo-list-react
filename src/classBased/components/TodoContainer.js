import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";



class TodoContainer extends React.Component {

    state = {
        todos: [
            // {
            //     id: uuidv4(),
            //     title: "Setup development environment",
            //     completed: true
            // },
            // {
            //     id: uuidv4(),
            //     title: "Develop website and add content",
            //     completed: false
            // },
            // {
            //     id: uuidv4(),
            //     title: "Deploy to live server",
            //     completed: false
            // }
        ]
    };

    delTodo = (id) => {
        this.setState(
            {
                todos: [
                    ...this.state.todos.filter(todo => { return todo.id !== id; })
                ]
            }
        )
        console.log("Deleting ", id);
    }

    handleChange = (id) => {
        this.setState(prevState => (
            {
                todos: prevState.todos.map(
                    todo => {
                        if (todo.id === id) {
                            return {
                                ...todo,
                                completed: !todo.completed,
                            }
                        }
                        return todo;
                    }
                )
            }
        )
        );
        console.log("clicked", id);
    }

    addToDoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
        console.log("added to do item signal reached the parent (container)", title);
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })

        })
        console.log(updatedTitle, id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    //componentDidMount() {
    //fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //.then(response => response.json())
    // .then(data => this.setState({ todos: data }));
    //}

    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }

    render() {
        return (
            // in HTML, we add CSS classes to elements using the class syntax. But in React JSX, we make use of a special syntax called className.
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addToDoProps={this.addToDoItem}></InputTodo>
                    <TodoList todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                        setUpdate={this.setUpdate}
                    >
                    </TodoList>
                </div>
            </div>
        )
    }
}
export default TodoContainer