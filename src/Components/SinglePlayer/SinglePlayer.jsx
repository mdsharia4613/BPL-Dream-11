
import { FaUserAlt, FaFlag } from "react-icons/fa";




const SinglePlayer = ({ player, habdleChoosePalyer }) => {
    const { image, name, country,
 role, battingStyle, bowlingStyle, price, rating } = player;

    return (
        <div className="w-72 shadow-xl shadow-gray-500 p-6 rounded-lg space-y-3 mt-8 mb-10">
            <img className="w-60" src={image} alt="name" />
            <div className="flex items-center gap-3">
                <FaUserAlt /> 
                <p>{name}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <FaFlag />
                    <p>{country}</p>
                </div>
                <p>{role}</p>
            </div>

            <p>Rating: {rating}</p>
            <div className="flex justify-between">
                <p>{battingStyle}</p>
                <p>{bowlingStyle}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Price: {price}</p>
                <button onClick={() => habdleChoosePalyer(player)} className="bg-gray-400 text-white px-3 py-1 rounded-lg">Choose Player</button>
            </div>
            
        </div>
    );
};

export default SinglePlayer;