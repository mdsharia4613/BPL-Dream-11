import React from 'react';

const Selectedplayers = ({ selactPlayers }) => {
    return (
        <div className='grid grid-cols-1 gap-4 mt-8 mb-10'>
            {
                selactPlayers.map(player => (
                    <div key={player.id} className='border p-4 rounded-lg shadow-md flex items-center gap-4'>
                        <img  className='w-20 rounded-lg bg-gray-400 p-1' src={player.image} alt="" />
                        <div>
                            <h3 className='font-semibold text-lg'>{player.name}</h3>
                            <p className='text-gray-400'>{player.role}</p>
            
                        </div>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Selectedplayers;