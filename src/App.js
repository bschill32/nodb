import React, { Component } from "react"
import "./App.css"
import MoviesWrapper from "./components/MoviesWrapper"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <MoviesWrapper />
      </div>
    )
  }
}

export default App
