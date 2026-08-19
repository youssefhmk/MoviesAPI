import { useState ,useEffect } from 'react'
import { useDebounce } from 'react-use'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Search from './components/search.jsx'
import Spinner from './components/Spinner.jsx'
import MovieCard from './components/MovieCard.jsx'
const API_BASE_URL= 'https://api.themoviedb.org/3'
const API_KEY =import.meta.env.VITE_TMDB_KEY;
const API_OPTIONS = {
  method :'GET',
  headers :{
    accept:'application/json',
    //data from api is js
    Authorization:`Bearer ${API_KEY}`
    //who is the one trying to access the api 
    //everyone has a unique key to access the api
  }
}


const App = ()=>{
  const [searchterm,setsearchterm] = useState("")
  const [movies,setmovies] = useState([])
  const [loading,setloading] = useState(false)
 const fetchData = async (query='') => {
  setloading(true)
  try{
     const endpoint =query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
     `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
     const response = await fetch(endpoint,API_OPTIONS)
     if(!response.ok){
      throw new Error('Network response was not ok');}
      const data = await response.json()
      if(data.results.length === 0){
        setmovies([])
      return}
      setmovies(data.results)
  }
  catch(error){
    console.error('Error fetching data:', error);
  }
  finally{
    setloading(false)
  }
 }
 useEffect(()=>
  {
  fetchData(searchterm)
},[searchterm])
  return(
    <main>
  <div className='pattern'/>
  <div className='wrapper'>
    <header>
      <img src="/hero.png" alt="" />
      <h1>find <span className='text-gradient'>movies</span> you 'll enjoy
      without the hassle</h1>
    <Search searchterm={searchterm} setsearchterm={setsearchterm} />
    </header>
    <section className='all-movies'>
      <h2 className='text-white mt-2'>All Movies</h2>
    {loading ? <Spinner /> :
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>}
    </section>
  </div>
  </main>
  )
}

export default App;
