// Liked jokes ko LocalStorage me save karne ka function
export const saveJoke = (joke) => {
    let savedJokes = JSON.parse(localStorage.getItem("likedJokes")) || [];
    savedJokes.push(joke);
    localStorage.setItem("likedJokes", JSON.stringify(savedJokes));
};

// Saved jokes ko retrieve karne ka function
export const getSavedJokes = () => {
    return JSON.parse(localStorage.getItem("likedJokes")) || [];
};

// Joke ko remove karne ka function
export const removeJoke = (id) => {
    let savedJokes = JSON.parse(localStorage.getItem("likedJokes")) || [];
    savedJokes = savedJokes.filter(joke => joke.id !== id);
    localStorage.setItem("likedJokes", JSON.stringify(savedJokes));
};
