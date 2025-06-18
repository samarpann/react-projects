import { useState, useContext } from "react";
import { AuthContext } from "../../../joke-generator/src/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(name, email, password);
        navigate("/dashboard");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {/* Email Input */}
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {/* Password Input */}
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {/* Signup Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Login Link */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?  
                    <Link to="/login" className="text-blue-500 hover:underline ml-1">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
