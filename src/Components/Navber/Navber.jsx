import { TbCoinFilled } from "react-icons/tb";
import logo from "../../assets/image/logo.png"
const Navber = ({ coins }) => {
    return (
        <nav className="flex justify-between items-center mt-4 mb-3">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className=" space-x-7 text-xs font-normal text-gray-400">
                <a href="">Home</a>
                <a href="">Team</a>
                <a href="">Schedul</a>
                <a href="">Fixture</a>
            </div>
            <div className="">
                <button className="bg-gray-300 px-8 py-1 ">{coins} Coin <TbCoinFilled className="text-yellow-500" /> </button>

            </div>
        </nav>
    );
};

export default Navber;