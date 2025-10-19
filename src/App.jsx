
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'
import PlayerCard from './Components/PlayerCard/PlayerCard';
import Swal from 'sweetalert2'
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

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
  
  // Add player to selected

  const [selactPlayers, setSelactPlayers] = useState([]);

  const habdleChoosePalyer = (player) => {
    if(selactPlayers.find(p => p.id === player.id)){
      Swal.fire("Player already selected!");
      return;
    }
    if (selactPlayers.length >= 6) {
      Swal.fire("Cannot select more than 6 players!");
      return;
    }
    setSelactPlayers([...selactPlayers, player]);
  };

  
  return (
    <>
      <Navber coins={coins} ></Navber>
      <Banner addCoin={addCoin}></Banner>
      <PlayerCard handleIsActiveState={handleIsActiveState} isActive={isActive} selactPlayers={selactPlayers} habdleChoosePalyer={habdleChoosePalyer}></PlayerCard>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
