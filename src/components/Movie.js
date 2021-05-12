import React from 'react'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, overview, vote_average }) {

    const setVoteClass=(vote)=>{
        if(vote>=8){
            return "green"
        }else if(vote>=6){
            return "orange"
        }else{
            return "red"
        }
    }

    return (
        <div className='movie'>
            <img src={ (poster_path ? IMGPATH + poster_path: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg") } alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className= {`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h4>{title} - Overview</h4>
                <p>{overview}</p>
            </div>
        </div>
    )
}
