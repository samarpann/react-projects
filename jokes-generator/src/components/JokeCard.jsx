import { useContext, useState } from "react";
import { JokeContext } from "../context/JokeContext";

const JokeCard = ({ joke }) => {
    const { likeJoke, dislikeJoke } = useContext(JokeContext);
    const [isCopied, setIsCopied] = useState(false);

    // Joke copy karne ka function
    const copyToClipboard = () => {
        setIsCopied(true);
        const jokeText = joke.setup ? `${joke.setup} ${joke.delivery}` : joke.joke;
        navigator.clipboard.writeText(jokeText);

        // 2 sec baad copied state reset
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-md bg-white">
            <p className="text-lg font-semibold">{joke.setup ? `${joke.setup} ${joke.delivery}` : joke.joke}</p>
            
            <div className="mt-3 flex space-x-3">
                <button onClick={() => likeJoke(joke)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Like 👍
                </button>
                <button onClick={() => dislikeJoke(joke.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    Dislike 👎
                </button>
                <button onClick={copyToClipboard} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    {isCopied ? "Copied! ✅" : "Copy 📋"}
                </button>
            </div>
        </div>
    );
};

export default JokeCard;
