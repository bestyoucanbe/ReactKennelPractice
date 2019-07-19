import ReactDOM from "react-dom"
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from "./components/Kennel"

ReactDOM.render(
  <Router>
      <Kennel />
</Router>,
  document.querySelector("#root"))


