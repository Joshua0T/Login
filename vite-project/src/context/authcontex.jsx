import {  createContext, useContext, useState } from "react";


export const Authcontext = createContext()
 

export const useAuth = ()=> {
    const context = useContext (Authcontext)
    if (!context) {
        throw new Error("error")
    }
    return context;
}

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false);
    
    const signup =(user) =>{
        try{
        setAuthenticated(true);

    }catch(error){
        console.log(error)
    }
     
}
    
    return (
        <Authcontext.Provider value={{
            signup,
            isAuthenticated
        }}>
        {children}
        </Authcontext.Provider>
    )
}


