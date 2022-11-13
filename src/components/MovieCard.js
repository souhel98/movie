import React from 'react'

function MovieCard({cardData}) {
  return (
    <div className='movie'>
          <div>
            <p>{cardData.Year}</p>
          </div>
          <div>
            <img src={cardData.Poster !== 'N/A' ? cardData.Poster : 'https://via.placeholder.com/400'} alt={cardData.Title}/>
          </div>
          <div>
            <span>{cardData.Type}</span>
            <h3>{cardData.Title}</h3>
          </div>
        </div>
  )
}

export default MovieCard