import React, {createContext, FC, ProviderProps, useState} from 'react';
import {UserType} from "../types";

const UserContext = createContext<InitialStateType | null>(null);

type UserProviderPropsType = {
    children: React.ReactNode
};


type InitialStateType = {
    user: UserType | null,
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>,
};



const UserProvider: React.FC<UserProviderPropsType> = ({children}) => {
    const [user, setUser] = useState<UserType | null>(null);

    return (
      <UserContext.Provider value={{user, setUser}}>
          {children}
      </UserContext.Provider>
    );
}

export {
    UserContext,
    UserProvider
};
