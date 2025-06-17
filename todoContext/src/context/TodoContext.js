// 1
import {  createContext,useContext} from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:'todo msg',
            completed:false,
        }
    ],
    theme:'dark',
}); // this is for creating context why u need to use it because we need to use it in other files so we need to export it
export const useTodo=()=>
    { return  useContext(TodoContext);}
                                            // this is for using context why u need to use it because we need to use it in other files so we need to export it
                                            //and what this thing is do it will give the value of the context that means the value that we have passed in the provider
                                            //and we can use this value in other files 


export const Todoprovider=TodoContext.Provider  //  why i used this because i need to use it in other files so i need to export it                   
                     
//  

