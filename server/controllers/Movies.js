let id = 1
let movies = [
  {
    adult: false,
    backdrop_path: "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    belongs_to_collection: {
      id: 558216,
      name: "Venom Collection",
      poster_path: null,
      backdrop_path: null
    },
    budget: 116000000,
    genres: [
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 28,
        name: "Action"
      }
    ],
    homepage: "http://www.venom.movie/site/",
    id: id++,
    imdb_id: "tt1270797",
    original_language: "en",
    original_title: "Venom",
    overview:
      "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    popularity: 57.019,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    production_companies: [
      {
        id: 31828,
        logo_path: null,
        name: "Avi Arad Productions",
        origin_country: "US"
      },
      {
        id: 53462,
        logo_path: null,
        name: "Matt Tolmach Productions",
        origin_country: "US"
      },
      {
        id: 84041,
        logo_path: null,
        name: "Pascal Pictures",
        origin_country: "US"
      },
      {
        id: 7505,
        logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
        name: "Marvel Entertainment",
        origin_country: "US"
      },
      {
        id: 81620,
        logo_path: "/gNp4dfuBOXmVWdGKb63NfbFNbFi.png",
        name: "Tencent Pictures",
        origin_country: "CN"
      }
    ],
    production_countries: [
      {
        iso_3166_1: "CN",
        name: "China"
      },
      {
        iso_3166_1: "US",
        name: "United States of America"
      }
    ],
    release_date: "2018-09-28",
    revenue: 855013954,
    runtime: 112,
    spoken_languages: [
      {
        iso_639_1: "zh",
        name: "普通话"
      },
      {
        iso_639_1: "en",
        name: "English"
      },
      {
        iso_639_1: "ms",
        name: "Bahasa melayu"
      }
    ],
    status: "Released",
    tagline: "The world has enough Superheroes.",
    title: "Venom",
    video: false,
    vote_average: 6.6,
    vote_count: 5419
  },
  {
    adult: false,
    backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
    belongs_to_collection: null,
    budget: 152000000,
    genres: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 878,
        name: "Science Fiction"
      }
    ],
    homepage: "https://www.marvel.com/movies/captain-marvel",
    id: id++,
    imdb_id: "tt4154664",
    original_language: "en",
    original_title: "Captain Marvel",
    overview:
      "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    popularity: 366.817,
    poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    production_companies: [
      {
        id: 420,
        logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
        name: "Marvel Studios",
        origin_country: "US"
      }
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America"
      }
    ],
    release_date: "2019-03-06",
    revenue: 779179899,
    runtime: 124,
    spoken_languages: [
      {
        iso_639_1: "en",
        name: "English"
      }
    ],
    status: "Released",
    tagline: "Higher. Further. Faster.",
    title: "Captain Marvel",
    video: false,
    vote_average: 7.3,
    vote_count: 2496
  }
]

module.exports = {
  get: (req, res) => {
    res.status(200).send(movies)
    console.log(movies)
  },

  create: (req, res) => {
    const {
      adult,
      backdrop_path,
      belongs_to_collection,
      budget,
      homepage,
      imdb_id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      revenue,
      runtime,
      status,
      tagline,
      title,
      video,
      vote_average,
      vote_count
    } = req.body

    let movie = {
      adult,
      backdrop_path,
      belongs_to_collection,
      budget,
      homepage,
      id: id++,
      imdb_id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      revenue,
      runtime,
      status,
      tagline,
      title,
      video,
      vote_average,
      vote_count
    }
    movies.push(movie)
    res.status(200).send(movies)
  },

  update: (req, res) => {
    let index = null
    movies.forEach((item, i) => {
      if (item.id === Number(req.params.id)) index = i
    })
    movies[index] = {
      adult: movies[index].adult,
      backdrop_path: movies[index].backdrop_path,
      belongs_to_collection: movies[index].belongs_to_collection,
      budget: movies[index].budget,
      homepage: movies[index].homepage,
      id: movies[index].id,
      imdb_id: movies[index].imdb_id,
      original_language: movies[index].original_language,
      original_title: movies[index].original_title,
      overview: movies[index].overview,
      popularity: movies[index].popularity,
      poster_path: movies[index].poster_path,
      release_date: movies[index].release_date,
      revenue: movies[index].revenue,
      runtime: movies[index].runtime,
      status: movies[index].status,
      tagline: movies[index].tagline,
      title: movies[index].title,
      video: movies[index].video,
      vote_average: req.body.vote_average,
      vote_count: movies[index].vote_count
    }
    res.status(200).send(movies)
  },

  delete: (req, res) => {
    let index = null
    movies.forEach((item, i) => {
      if (item.id === Number(req.params.id)) index = i
    })
    movies.splice(index, 1)
    res.status(200).send(movies)
  }
}
