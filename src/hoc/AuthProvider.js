import {createContext, useState} from "react";


const AuthContext = createContext(null);

const AuthProvider = ({children}) => {




    const [user, setUser] = useState(null)

    const logIn = (newUser, cb) => {
        setUser(newUser)
        cb()
    }

    const logout=(cb)=>{
        setUser(null)
        cb()
    }

    const value={user,logout,logIn}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider,AuthContext};