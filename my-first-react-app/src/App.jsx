import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Card = (title)=>{
  return(
  <div>
    <h2>{title.title}</h2>
  </div>)
}
const App = ()=>{
  return(
    <>
    <h2>functional arrow compoo</h2>
    <Card title ="star wars" />
    <Card title ="avatar"/>
    <Card title ="the lion king"/>
    </>
  )
}

export default App;
