import { TbCoinFilled } from "react-icons/tb";
import logo from "../../assets/image/logo.png"
const Navber = () => {
    return (
        <nav className="flex justify-between items-center">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex items-center space-x-7 text-xs font-normal text-gray-400">
                <a href="">Home</a>
                <a href="">Team</a>
                <a href="">Schedul</a>
                <a href="">Fixture</a>
                <button className="bg-gray-300 px-6 py-1 text-xl"> <TbCoinFilled className="text-yellow-500" /></button>
            </div>
        </nav>
    );
};

export default Navber;