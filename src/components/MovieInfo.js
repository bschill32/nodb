import React, { Component } from "react"

class MovieInfo extends Component {
  constructor() {
    super()

    // this.state = {
    //   rating: 0
    // }
  }
  render() {
    let {
      backdrop_path,
      id,
      overview,
      poster_path,
      release_date,
      runtime,
      tagline,
      title,
      vote_average,
      vote_count,
      deleteFavorite,
      updateRating
      // ratingInput,
      // rateFavorite,
      // rating,
      // adult,
      // belongs_to_collection,
      // budget,
      // homepage,
      // imdb_id,
      // original_language,
      // original_title,
      // popularity,
      // revenue,
      // status,
      // video
    } = this.props
    let posterUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    let backdropUrl = "https://image.tmdb.org/t/p/w1400_and_h450_face/"
    return (
      <div>
        <h1>MovieInfo</h1>
        <img src={backdropUrl + backdrop_path} />
        <img src={posterUrl + poster_path} />
        <div>{title}</div>
        <div>{vote_average}</div>
        <div>{vote_count}</div>
        <div>{tagline}</div>
        <div>{overview}</div>
        <div>{runtime}</div>
        <div>{release_date}</div>
      </div>
    )
  }
}

export default MovieInfo
