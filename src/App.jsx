import { useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


import './App.css'
import Home from './pages/Home'

function App() {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 2210, amt: 2290 },
    // add more data points as needed
  ];


  return (
    <>
      <Home />
    </>
  )
}

export default App
