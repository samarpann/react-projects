import { useContext } from "react";
import { JokeContext } from "../../../joke-generator/src/context/JokeContext";
import JokeCard from "../../../joke-generator/src/components/JokeCard";

const SavedJokes = () => {
    const { likedJokes } = useContext(JokeContext);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-center mb-6">Saved Jokes 😂</h2>
            
            {likedJokes.length === 0 ? (
                <p className="text-center text-gray-600">No saved jokes yet. Start liking some jokes! 😅</p>
            ) : (
                <div className="space-y-4">
                    {likedJokes.map((joke, index) => (
                        <JokeCard key={index} joke={joke} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SavedJokes;
