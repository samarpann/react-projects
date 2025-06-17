import { useContext, useState } from "react";
import { JokeContext } from "../context/JokeContext";
import JokeCard from "../components/JokeCard";

const Dashboard = () => {
    const { jokes, fetchJokes } = useContext(JokeContext);  

    const [searchTerm, setSearchTerm] = useState(""); 
    const [category, setCategory] = useState("Any");  

    // Search + Category Filter
    const filteredJokes = jokes.filter(joke => 
        (category === "Any" || joke.category === category) &&
        (joke.joke?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        joke.setup?.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Category change karne par API se naya data fetch karna
    const handleCategoryChange = async (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);

        let apiUrl = "https://v2.jokeapi.dev/joke/Any?amount=50";
        apiUrl += selectedCategory === "Any" ? "Any" : selectedCategory;
        apiUrl += "?amount=10";

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            fetchJokes(data.jokes);
        } catch (error) {
            console.error("Error fetching category jokes:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-center mb-6">Jokes Dashboard</h2>

            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                {/* Search Input */}
                <input 
                    type="text" 
                    placeholder="Search Jokes..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Category Dropdown */}
                <select 
                    value={category} 
                    onChange={handleCategoryChange}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Any">All Categories</option>
                    <option value="Programming">Programming</option>
                    <option value="Dark">Dark</option>
                    <option value="Pun">Pun</option>
                    <option value="Spooky">Spooky</option>
                    <option value="Christmas">Christmas</option>
                </select>
            </div>

            {/* Reload Button */}
            <button 
                onClick={fetchJokes} 
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
                Reload Jokes 🔄
            </button>

            {/* Jokes List */}
            <div className="mt-6">
                {filteredJokes.length === 0 ? (
                    <p className="text-center text-gray-600">No jokes found.</p>
                ) : (
                    filteredJokes.map((joke, index) => (
                        <JokeCard key={index} joke={joke} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
