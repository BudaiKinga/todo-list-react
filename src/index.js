import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

// routing
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <TodoContainer />
  //   </BrowserRouter>
  // </React.StrictMode>,
  
  // !!!The value assigned to the basename is the subdirectory name (which is the repository name)
  <Router basename={process.env.PUBLIC_URL}>
    <TodoContainer />
  </Router>,
  document.getElementById("root")
)