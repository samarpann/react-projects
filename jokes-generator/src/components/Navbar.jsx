import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            {/* Left Side Links */}
            <div className="space-x-4">
                <Link to="/dashboard" className="hover:text-gray-300">Home</Link>
                <Link to="/saved-jokes" className="hover:text-gray-300">Saved Jokes</Link>
            </div>

            {/* Right Side Links */}
            <div className="space-x-4">
                {!user ? (
                    <>
                        <Link to="/login" className="hover:text-gray-300">Login</Link>
                        <Link to="/signup" className="hover:text-gray-300">Signup</Link>
                    </>
                ) : (
                    <button onClick={logout} className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
