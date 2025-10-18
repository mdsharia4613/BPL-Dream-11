
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'
import PlayerCard from './Components/PlayerCard/PlayerCard';

function App() {
  const [coins, setCoins] = useState(0);
  const addCoin = () => setCoins(prev => prev  + 15000)

  const [isActive, setIsActive] = useState({
    cart: true,
    state: 'Available'
  })

  const handleIsActiveState = (state) => {
    if(state === 'Available'){
      setIsActive({
        cart: true,
        state: 'Available'
      })
    }
    else{
      setIsActive({
        cart: false,
        state: 'Selected'
      })
    }
  }
  
  return (
    <>
      <Navber coins={coins} ></Navber>
      <Banner addCoin={addCoin}></Banner>
      <PlayerCard handleIsActiveState={handleIsActiveState} isActive={isActive}></PlayerCard>
    </>
  )
}

export default App
