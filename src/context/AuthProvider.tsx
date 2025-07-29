'use client'
import { IAuthContextProps } from '@/types/type'
import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const AuthContext = createContext<IAuthContextProps>({
    token:null,
    setToken: () => {}
});

export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [token,setToken] = useState<string | null>(null);
    useEffect(() => {
        const storedToken = Cookies.get('token');
        if(storedToken) setToken(storedToken);
    },[]);
  return (
    <AuthContext.Provider value={{ token, setToken}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
