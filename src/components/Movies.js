import React, { Component } from "react"
// import Axios from "axios"

class Movies extends Component {
  constructor() {
    super()

    this.state = {
      rating: 0
    }
  }

  handleChange = value => {
    // console.log(typeof value)
    this.setState({
      rating: Number(value)
    })
  }

  render() {
    let posterUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    let backdropUrl = "https://image.tmdb.org/t/p/w1400_and_h450_face/"
    return (
      <div>
        <h1>Movies</h1>
        {this.props.movies.map(item => {
          let {
            backdrop_path,
            poster_path,
            title,
            vote_average,
            //vote_count,
            tagline,
            overview,
            runtime,
            release_date,
            id
          } = item
          return (
            //key
            <div key={id}>
              <img src={backdropUrl + backdrop_path} alt="" />
              <img src={posterUrl + poster_path} alt="" />
              <div>{title}</div>
              <div>{vote_average}</div>
              {/* <div>{vote_count}</div> */}
              <input onChange={e => this.handleChange(e.target.value)} />
              <button
                onClick={() => {
                  this.props.updateRating(id, this.state.rating)
                }}
              >
                Rate Movie
              </button>
              <div>{tagline}</div>
              <div>{overview}</div>
              <div>{runtime}</div>
              <div>{release_date}</div>
              <button
                onClick={() => {
                  this.props.deleteMovie(id)
                }}
              >
                Delete Movie
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Movies
