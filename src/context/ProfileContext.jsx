"use client"
import React, { Children, createContext, useState } from 'react';







export const FriendsContext = createContext();

const ProfileContext = ({children}) => {

    const [timeLine, setTimeLine] = useState([]);

    const data = {
        timeLine, setTimeLine
    }

   return <FriendsContext.Provider value={data}>
    {children}
   </FriendsContext.Provider>
};

export default ProfileContext;