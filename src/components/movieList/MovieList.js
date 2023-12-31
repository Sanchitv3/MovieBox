import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import "./Movielist.css"
import { Params, useParams } from 'react-router-dom'

const MovieList = () => {

    const [MovieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=7234325ae5588315f3eeb410db8118ed&language=en-US`)
  .then(res => res.json())
  .then(data => setMovieList(data.results))
    }

  return (
    <div className='movie__list'>
        <h2 className='list__title'>
            {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className='list__cards'>
            {
                MovieList.map(movie => (
                    <Card movie={movie} />
                ))
            }
        </div>
    </div>
  )
}

export default MovieList