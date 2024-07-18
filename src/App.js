import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=9aa067dd'
// const movie1 = {
//   "Title": "Mission: Impossible - Ghost Protocol",
//   "Year": "2011",
//   "imdbID": "tt1229238",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSetSearchTerm] = useState('')

  const searchMovies = async (title) => {
    try {
      
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()
      setMovies(data.Search);
    } catch (error) {
      console.error();
    }
  }
  useEffect(() => {
    searchMovies('ghost')
  }, [])
  return (
    <div className="app">
      <h1>Filmer 1</h1>
      <div className="search">
        <input
          placeholder='Search for a movie'
          value={searchTerm}
          onChange={(e) => setSetSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt='search icon'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      <div className="container">
        {movies.length > 0 ? (
          <div>
            {movies.map((movie) =>{
              <MovieCard movie={movie}/>
            })}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found </h2>
          </div>
        )}

        {console.log(movies[0])}
      </div>

    </div>
  );
}

export default App;
