import React, { Component } from "react"
import axios from "axios"

//components
import Movies from "../Movies/Movies"
import Search from "../Search/Search"
// import Header from "../Header/Header"
import Banner from "../Banner/Banner"
import "./MoviesWrapper.css"

class MoviesWrapper extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  updateMovies = state => {
    // console.log(this)
    this.setState({
      movies: state
    })
  }

  deleteMovie = id => {
    axios
      .delete(`/api/movies/${id}`)
      .then(res => {
        this.setState({
          movies: res.data
        })
      })
      .catch(err => {
        console.log(`There is an ${err}`)
      })
  }

  updateRating = (id, text) => {
    axios
      .put(`/api/movies/${id}`, { vote_average: text })
      .then(res => {
        this.setState({
          movies: res.data
        })
      })
      .catch(err => {
        console.log(`There is an ${err}`)
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
      <div className="moviesWrapper">
        <Banner />
        {/* <Header header={`Header`}> </Header> */}
        <Search update={this.updateMovies} />
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
