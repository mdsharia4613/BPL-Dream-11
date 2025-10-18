
import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";


const AvailablePlayers = ({ habdleChoosePalyer }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('/Players.json')
        .then(res => res.json())
        .then(data =>{
            console.log("data", data);
            setPlayers(data)})
    } ,[])

    
    
    return (
        <div className="cart">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    players.map(player => <SinglePlayer key={player.id} player={player} habdleChoosePalyer={habdleChoosePalyer}></SinglePlayer>)
                }
            </div>
        </div>
        
    );
};

export default AvailablePlayers;