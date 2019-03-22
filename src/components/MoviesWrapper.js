import React, { Component } from "react"
import axios from "axios"

//components
import Movies from "./Movies"
import Search from "./Search"

class MoviesWrapper extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  updateMovies(arr) {
    console.log(this)
    this.setState({
      favoriteMovies: arr
    })
  }

  deleteMovie = id => {
    axios.delete(`/api/movies/${id}`).then(res => {
      this.setState({
        movies: res.data
      })
    })
  }

  updateRating = (id, text) => {
    axios.put(`/api/movies/${id}`, { vote_average: text }).then(res => {
      this.setState({
        movies: res.data
      })
    })
  }

  componentDidMount = () => {
    axios
      .get("/api/movies")
      .then(res => {
        this.setState({
          movies: res.data
        })
      })
      .catch(err => {
        console.log(`There is an ${err}`)
      })
  }

  render() {
    return (
      <div>
        <h1>MoviesWrapper</h1>
        <Search updateMovies={this.updateMovies} />
        <Movies
          movies={this.state.movies}
          deleteMovie={this.deleteMovie}
          updateRating={this.updateRating}
        />
      </div>
    )
  }
}

export default MoviesWrapper
