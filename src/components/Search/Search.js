import React, { Component } from "react"
import axios from "axios"
import SearchResults from "../SearchResults/SearchResults"
import "./Search.css"
// import Keys from "../Keys.js"

class Search extends Component {
  constructor() {
    super()
    this.state = {
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
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${userInput}&page=1&include_adult=false
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
      .catch(err => {
        console.log(`There is an ${err}`)
      })
  }

  saveToMovies = id => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`
      )
      .then(res => {
        let movie = res.data
        axios
          .post(`api/movies`, movie)
          .then(res => {
            this.setState({
              userInput: "",
              posts: []
            })
            this.props.update(res.data)
          })
          .catch(err => {
            console.log(`There is an ${err}`)
          })
      })
      .catch(err => {
        console.log(`There is an ${err}`)
      })
  }

  render() {
    return (
      <div className="search">
        <div>
          <input
            className="searchBar"
            placeholder="Search for a movie....."
            value={this.state.userInput}
            onChange={e => this.search(e.target.value)}
          />
        </div>

        <div className="searchContainer">
          {this.state.posts.map(post => (
            <SearchResults
              key={post.id}
              saveToMovies={this.saveToMovies}
              rating={post.rating}
              id={post.id}
              title={post.title}
              poster={post.poster}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default Search
