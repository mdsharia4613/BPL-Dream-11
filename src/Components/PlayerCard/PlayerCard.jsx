import Available from '../AvailablePlayers/AvailablePlayers'
import Selected from '../SelectedPlayers/Selectedplayers'

const PlayerCard = ({ handleIsActiveState, isActive, selactPlayers, habdleChoosePalyer }) => {
    return (
        <div className="mt-20">
            
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-xl">
                        {isActive.state === 'Available' ? 'Available Players' : 'Selected Players'}
                       
                    </h2>
                </div>

                <div className="space-x-3">
                    <button
                        onClick={() => handleIsActiveState('Available')}
                        className={`${isActive.state === 'Available'
                            ? 'bg-yellow-400 text-black font-semibold py-1 px-3 rounded-2xl'
                            : 'bg-gray-200 text-gray-600 py-1 px-3 rounded-2xl'}`}
                    >
                        Available
                    </button>

                    {/* Selected Button */}
                    <button
                        onClick={() => handleIsActiveState('Selected')}
                        className={`${isActive.state === 'Selected'
                            ? 'bg-yellow-400 text-black font-semibold py-1 px-3 rounded-2xl'
                            : 'bg-gray-200 text-gray-600 py-1 px-3 rounded-2xl'}`}
                    >
                        Selected
                    </button>
                </div>
            </div>

            {/* নিচের অংশ: Conditional Render */}
            <div className="mt-6">
                {isActive.state === 'Available' ? <Available habdleChoosePalyer={habdleChoosePalyer} /> : <Selected selactPlayers={selactPlayers}/>}
            </div>
        </div>
    );
};

export default PlayerCard;
