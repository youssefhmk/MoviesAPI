import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Search from './components/search.jsx'
const API_BASE_URL= 'https://api.themoviedb.org/3'
const API_KEY =import.meta.env.VITE_TMDB_KEY;
const API_OPTIONS = {
  method :'GET',Headers :{
    accept:'application/json',Authorization:`Bearer ${API_KEY}`
  }
}
const App = ()=>{
  const [searchterm,setsearchterm] = useState("")
  return(
    <main>
  <div className='pattern'/>
  <div className='wrapper'>
    <header>
      <img src="/hero.png" alt="" />
      <h1>find <span className='text-gradient'>movies</span> you 'll enjoy
      without the hassle</h1>
    </header>
    <Search searchterm={searchterm} setsearchterm={setsearchterm} />
    <h1>{searchterm}</h1>

  </div>
  </main>
  )
}

export default App;
