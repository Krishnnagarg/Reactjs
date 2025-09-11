import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => { //children is like props pass any name acc your 
    const [user,setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
     
}

export default UserContextProvider;