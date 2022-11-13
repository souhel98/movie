import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import SearchIcon from './search.svg'

//48d38952

const API_URL = 'https://www.omdbapi.com?apikey=48d38952'


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search)
  }
  useEffect (() => {
    searchMovies('man')
  },[])

  function searchInputKey(e){
    if(e.key === 'Enter')
    searchMovies(searchTerm);
    
}
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input id='search'
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={searchInputKey}
        />
        <img
          src={SearchIcon}
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 
        ? (
          <div className='container'>
            {movies.map((data) => (
              <MovieCard cardData={data}/>
            ))}
          </div>
        ) : (
             <div className='empty'>
              <h2>no movies found</h2>
             </div>
        )
      }

      
    </div>
  )
}

export default App;
