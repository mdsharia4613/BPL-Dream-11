import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribedEmail, setSubscribedEmail] = useState(null);

    // Load from localStorage
    useEffect(() => {
        const savedEmail = localStorage.getItem("newsletterEmail");
        if (savedEmail) {
            setSubscribedEmail(savedEmail);
        }
    }, []);

    const handleSubscribe = () => {
        if (!email) {
            toast.error("Please enter your email address!");
            return;
        }
        if (localStorage.getItem("newsletterEmail")) {
            toast.info("You are already subscribed!");
            return;
        }
        localStorage.setItem("newsletterEmail", email);
        setSubscribedEmail(email);
        toast.success("Subscribed successfully!");
        setEmail("");
    };

    return (
        <div className="bg-yellow-50 py-14 px-6 text-center mt-20 rounded-lg shadow-md">
            <ToastContainer position="top-center" autoClose={2000} />
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Subscribe to our Newsletter
            </h2>
            <p className="text-gray-500 mb-6">
                Get the latest updates about players and matches.
            </p>

            {subscribedEmail ? (
                <p className="text-green-700 font-semibold">
                    Thanks for subscribing, {subscribedEmail}!
                </p>
            ) : (
                <div className="flex justify-center gap-3 flex-wrap">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border border-gray-400 px-4 py-2 rounded-lg w-64 focus:outline-none"
                    />
                    <button
                        onClick={handleSubscribe}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg"
                    >
                        Subscribe
                    </button>
                </div>
            )}
        </div>
    );
};

export default Newsletter;
