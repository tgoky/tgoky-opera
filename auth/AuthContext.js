import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [userToken, setUserToken] = useState(null);
    const [test, setTest] = useState('Test Value');

    const login = () => {
        setUserToken('isfhfbbfs');
        setIsLoading(false);

    }

    const logout = () => {
        setUserToken(null);
        setIsLoading(false);
    }


    return (
        <AuthContext.Provider value={{test}}>
            {children}
        </AuthContext.Provider>
    );
}