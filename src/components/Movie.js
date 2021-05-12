import React from 'react'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, overview, vote_average }) {
    return (
        <div className='movie'>
            <img src={ IMGPATH + poster_path } alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}
