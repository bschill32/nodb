import React, { Component } from "react"
// import Logo from "./Logo"

class SearchDetails extends Component {
  render() {
    let posterUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    let { id, title, poster, rating, saveToMovies } = this.props
    // console.log(title)
    return (
      <div>
        <img src={posterUrl + poster} />
        <div>
          <h4>{title}</h4>
          <p>Rating: {rating}</p>
          <button onClick={() => saveToMovies(id)}>Add to Favorites</button>
        </div>
      </div>
    )
  }
}

export default SearchDetails
