import React, { Component } from "react"
import "./reset.css"
// import "./App.css"
import MoviesWrapper from "./components/MoviesWrapper/MoviesWrapper"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesWrapper />
      </div>
    )
  }
}

export default App
