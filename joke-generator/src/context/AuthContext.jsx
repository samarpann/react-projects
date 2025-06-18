import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();   //yae ek global state bna rha hai jiska kaam hai har jagah ek centeralized store provide krna jisse hum login signup or dashboard kae function use krr skae 

export const AuthProvider = ({ children }) => {    //authprovider ek component hai jo ki ek global state provide krta hai or yae context provider hai jo ki hume user ko login or logout krne ki facility provide krta hai
    const [user, setUser] = useState(null);       //why null is used here because initially user is not logged in 

    // Component load hone par check karega ki koi user login hai ya nahi
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));   
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    // Signup Function (Local Storage me Save karna)
    const signup = (name, email, password) => {
        const userData = { name, email, password };
        localStorage.setItem("user", JSON.stringify(userData));// local storage sirf string store krta ha isilyehum object ko string me convert krte hai or isliye hum stringfy ka use krte hai
        setUser(userData);
    };

    // Login Function (Local Storage se Match karna)
    const login = (email, password) => {
        const savedUser = JSON.parse(localStorage.getItem("user"));   //json.parse is used to convert string to object
        if (savedUser && savedUser.email === email && savedUser.password === password) {
            setUser(savedUser);
            return true;
        }
        return false;
    };

    // Logout Function (Local Storage Clear karna)
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}> 
            {children}    
        </AuthContext.Provider>
    );
};
