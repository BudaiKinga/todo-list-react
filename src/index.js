import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

// routing
import { BrowserRouter } from "react-router-dom"
import { HashRouter as Router } from "react-router-dom"




ReactDOM.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <TodoContainer />
  //   </BrowserRouter>
  // </React.StrictMode>,
  <Router>
    <TodoContainer />
  </Router>,
  document.getElementById("root")
)