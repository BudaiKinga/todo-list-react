import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"



const TodoContainer = (props) => {

    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    const [todos, setTodos] = useState(getInitialTodos());

    const delTodo = (id) => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id;
            })
        ])
        console.log("Deleting ", id);
    }

    const handleChange = (id) => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )

        console.log("clicked", id);
    }

    const addToDoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos(
            [...todos, newTodo]
        );
        console.log("added to do item signal reached the parent (container)", title);
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })

        )
        console.log(updatedTitle, id)
    }

    useEffect(() => {
        console.log("test run")

        // getting stored items
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if (loadedTodos) {
            setTodos(loadedTodos)
        }
    }, [setTodos])

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/">
                {/* in HTML, we add CSS classes to elements using the class syntax. But in React JSX, we make use of a special syntax called className. */}
                <div className="container">
                    <div className="inner">
                        <Header />
                        <InputTodo addToDoProps={addToDoItem}></InputTodo>
                        <TodoList todos={todos}
                            handleChangeProps={handleChange}
                            deleteTodoProps={delTodo}
                            setUpdate={setUpdate}
                        >
                        </TodoList>
                    </div>
                </div>
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="*">
                <NotMatch />
            </Route>
        </Switch>
        </>
    )
}
export default TodoContainer