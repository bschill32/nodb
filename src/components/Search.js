import React, { Component } from "react"
import axios from "axios"
import SearchDetails from "./SearchDetails"
import Keys from "../Keys.js"

class Search extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      userInput: "",
      posts: []
    }
  }

  search(val) {
    let userInput = val
    this.setState({
      userInput
    })
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=76d7b27b5dfcc547a04ba766e18e963d&language=en-US&query=${userInput}&page=1&include_adult=false
        `
      )
      .then(res => {
        const posts = res.data.results.map(obj => ({
          id: obj.id,
          title: obj.title,
          poster: obj.poster_path,
          rating: obj.vote_average,
          total_votes: obj.vote_count
        }))
        this.setState({ posts })
      })
  }

  saveToMovies = id => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=76d7b27b5dfcc547a04ba766e18e963d&language=en-US`
      )
      .then(res => {
        let movie = res.data
        axios.post(`api/favorites`, movie).then(res => {
          this.setState({
            userInput: "",
            posts: []
          })
          this.props.update(res.data)
        })
      })
  }

  render() {
    return (
      <div>
        <div>
          <input
            className="search-input"
            placeholder="Search Movies"
            value={this.state.userInput}
            onChange={e => this.search(e.target.value)}
          />
        </div>

        {/* {this.state.posts.map(post => (
          <SearchDetails
            saveToMovies={this.saveToMovies}
            rating={post.rating}
            id={post.id}
            title={post.title}
            poster={post.poster}
          />
        ))} */}
      </div>
    )
  }
}
export default Search
