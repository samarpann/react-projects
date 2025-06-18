import { createContext, useState, useEffect } from "react";

export const JokeContext = createContext();

export const JokeProvider = ({ children }) => {  //jokes e kempty array ha ijo jokes sotre kregaa or jokeprovider jo jokes ko u update krega 
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetchJokes();
    }, []);

    const fetchJokes = async () => {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=50");
            const data = await response.json();
            setJokes(data.jokes);
        } catch (error) {
            console.error("Error fetching jokes:", error);
        }
    };

    return (
        <JokeContext.Provider value={{ jokes, fetchJokes }}>
            {children}
        </JokeContext.Provider>
    );
};
