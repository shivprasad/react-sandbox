// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page

import React from "react"
import ReactDom from "react-dom"

ReactDom.render(
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>,
  document.getElementById("root")
);