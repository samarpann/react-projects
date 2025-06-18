import React, { useState, useEffect } from "react";
import { Loader2, Laugh, Heart, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet."
];

export default function JokeGenerator() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [likedJokes, setLikedJokes] = useState([]);
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(true);
  const [formUser, setFormUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("joke_user");
    const storedLikes = localStorage.getItem("liked_jokes");
    if (storedUser) setUser(storedUser);
    if (storedLikes) setLikedJokes(JSON.parse(storedLikes));
  }, []);

  useEffect(() => {
    localStorage.setItem("liked_jokes", JSON.stringify(likedJokes));
  }, [likedJokes]);

  const getRandomJoke = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setJoke(jokes[randomIndex]);
      setLoading(false);
    }, 600);
  };

  const toggleLike = () => {
    if (!user) return;
    setLikedJokes(prev =>
      prev.includes(joke) ? prev.filter(j => j !== joke) : [...prev, joke]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("joke_user");
    setUser(null);
  };

  const handleAuthSubmit = () => {
    if (!formUser.trim()) return alert("Username required");
    const existingUser = localStorage.getItem("registered_user");
    if (isSignup) {
      if (existingUser) return alert("User already signed up");
      localStorage.setItem("registered_user", formUser);
      localStorage.setItem("joke_user", formUser);
      setUser(formUser);
    } else {
      if (existingUser !== formUser) return alert("Invalid login");
      localStorage.setItem("joke_user", formUser);
      setUser(formUser);
    }
    setFormUser("");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 p-4">
        <div className="w-full max-w-sm bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold text-center text-yellow-900 mb-4">
            {isSignup ? "Signup" : "Login"} to Continue
          </h2>
          <input
            className="w-full p-2 border border-yellow-400 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
            placeholder="Enter username"
            value={formUser}
            onChange={e => setFormUser(e.target.value)}
          />
          <button
            onClick={handleAuthSubmit}
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded font-semibold"
          >
            {isSignup ? "Signup" : "Login"}
          </button>
          <p className="mt-4 text-center text-sm text-yellow-800">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button
              className="ml-1 underline"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Signup"}
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 p-4">
      <div className="w-full max-w-xl flex justify-between items-center mb-4">
        <motion.h1
          className="text-4xl font-bold text-yellow-900"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Joke Generator
        </motion.h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-yellow-800 font-medium"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      <div className="w-full max-w-xl bg-white rounded shadow p-6 text-center">
        <motion.p
          className="text-xl text-gray-800 min-h-[80px]"
          key={joke}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {joke || "Click the button to get a joke!"}
        </motion.p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button
            onClick={getRandomJoke}
            disabled={loading}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" /> Loading...
              </>
            ) : (
              <>
                <Laugh className="w-4 h-4" /> Tell me a joke
              </>
            )}
          </button>
          {joke && (
            <button
              onClick={toggleLike}
              className={`flex items-center gap-2 border px-4 py-2 rounded ${likedJokes.includes(joke) ? "bg-yellow-200 border-yellow-500 text-yellow-700" : "border-yellow-500 text-yellow-700"}`}
            >
              <Heart className="w-4 h-4" /> {likedJokes.includes(joke) ? "Liked" : "Like"}
            </button>
          )}
        </div>
      </div>

      {likedJokes.length > 0 && (
        <div className="mt-8 w-full max-w-xl">
          <h2 className="text-lg font-semibold text-yellow-900 mb-2">{user}'s Favorite Jokes</h2>
          <ul className="bg-white rounded-lg shadow divide-y divide-yellow-100">
            {likedJokes.map((j, idx) => (
              <li key={idx} className="p-3 text-gray-800">{j}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
