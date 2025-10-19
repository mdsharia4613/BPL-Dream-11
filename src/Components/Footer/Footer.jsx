import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/image/logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-20 py-12 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Left Section */}
                <div>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
                        <img src={logo} alt="logo" className="w-10" />
                        <h3 className="text-xl font-semibold">BPL DREAM 11</h3>
                    </div>
                    <p className="text-gray-400">
                        Build your dream cricket team and join the excitement of BPL!
                    </p>
                </div>

                {/* Middle Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Players</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                    <div className="flex justify-center md:justify-start gap-5 text-xl text-gray-400">
                        <a href="#" className="hover:text-yellow-400"><FaFacebook /></a>
                        <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
                © 2025 BPL Dream 11. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
