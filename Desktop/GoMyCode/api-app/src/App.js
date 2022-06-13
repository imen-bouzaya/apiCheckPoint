import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {  useState } from 'react';
function App() {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState("")
  const getData = async()=>{
    try {
    const res=  await axios.get(`http://www.omdbapi.com/?apikey=6d243476&i&type=movie&t=${text}&`) 
    setMovie(res.data)
    setLoading(false)
    console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault()
  getData()
  }
  return (
    <div >
      <div className='header-container'>
      <h1>Movies Library</h1>
      <form onSubmit={handleSubmit} >
        <input className='inp' 
        type="text" 
        value={text} 
        onChange={(e)=>setText(e.target.value)} 
        placeholder="Enter a movie to search" />
        {/* <button>search</button> */}
      </form>
      </div>
   {
     movie.Title && 
   <div className='movie-list'>
   <div className='movie-card' >
<img src={movie.Poster}/>
<h3>{movie.Title}</h3>
<p>{movie.Released}</p>
<p>{movie.Genre}</p>
</div>
<div id="DivHover">
<h3>Actors : {movie.Actors}</h3>
<p>Awards : {movie.Awards}</p>
<p>BoxOffice : {movie.BoxOffice}</p>
<p>Country : {movie.Country}</p>
</div>
   </div>
   }
    </div>
  );
}
export default App;