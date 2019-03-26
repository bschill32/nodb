import React, { Component } from "react"
import "./SearchResults.css"
// import Logo from "./Logo"

class SearchResults extends Component {
  render() {
    let posterUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    let { id, title, poster, rating, saveToMovies } = this.props

    return (
      <div key={id} className="relative searchBox">
        <img
          className="absolute searchPoster"
          src={posterUrl + poster}
          alt=""
        />
        <div className="searchInfo">
          <h4 style={{ fontWeight: "900", margin: "10px 0px 0px 0px" }}>
            {title}
          </h4>
          <p style={{ marginBottom: "20px" }}>Rating: {rating}</p>
          <button style={{ width: "120px" }} onClick={() => saveToMovies(id)}>
            Add to Movies
          </button>
        </div>
      </div>
    )
  }
}

export default SearchResults

//on post request send the new arr to state
