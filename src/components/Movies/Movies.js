import React, { Component } from "react"
import "./Movies.css"

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
    let posterUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"
    let backdropUrl = "https://image.tmdb.org/t/p/w1400_and_h450_face/"
    return (
      <div className="moviesContainer">
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
            <div key={id} className="movieBox">
              {/* <img src={backdropUrl + backdrop_path} alt="" /> */}
              <div className="poster">
                <img src={posterUrl + poster_path} alt="" />
              </div>
              <div className="info">
                <div className="titleWrapper">
                  <div className="rating">
                    <div>{vote_average}</div>
                  </div>
                  <div className="title">
                    <a>{title}</a>
                    <span>{release_date}</span>
                  </div>
                </div>

                {/* <div>{runtime}</div> */}
                {/* <div>{vote_count}</div> */}
                {/* <div>{tagline}</div> */}
                <div className="scrolling-box">
                  <p className="overview">{overview}</p>
                </div>
                <div className="buttons">
                  <div className="rate">
                    <div className="input">
                      <input
                        placeholder="0 - 10"
                        onChange={e => this.handleChange(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={() => {
                        this.props.updateRating(id, this.state.rating)
                      }}
                    >
                      Rate
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      this.props.deleteMovie(id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Movies
