
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'

function App() {
  const [coins, setCoins] = useState(0);
  const addCoin = () => setCoins(prev => prev  + 15000)


  
  return (
    <>
      <Navber coins={coins}></Navber>
      <Banner addCoin={addCoin}></Banner>
    </>
  )
}

export default App
