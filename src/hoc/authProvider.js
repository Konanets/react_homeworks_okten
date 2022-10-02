import {createContext, useState} from "react";

const authContext=createContext(null)


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const logIn=(user,cb)=>{
        setUser(user)
        cb()
    }

    const logOut=(cb)=>{
        setUser(null)
        cb()
    }

    const value={user,logOut,logIn}

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export {AuthProvider,authContext};