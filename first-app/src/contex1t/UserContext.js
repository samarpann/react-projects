// 1

import React from "react";


 const UserContext=React.createContext()


 export default UserContext; 


// export default UserContext;
// This page creates a context object using React.createContext() and exports it for use in other components.
// Yeh page ek context object banata hai React.createContext() ka use karke aur isse export karta hai taaki doosre components mein use kiya ja sake.
// Aur iska use isliye karna hai taaki hum components ke beech data ko easily share kar sakein bina props drilling ke.
// Aur yeh is prakaar hota hai:

// 1. Pehle context object create karte hain using React.createContext().
// 2. Phir context provider component ka use karte hain jo value prop ke through data provide karta hai.
// 3. Finally, context consumer component ya useContext hook ka use karke data access karte hain.

 
 






