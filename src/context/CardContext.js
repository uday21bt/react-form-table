import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
    let [showCard, setShowCard] = useState(false);
    
    const contextValue = { showCard, setShowCard };

    return (
        <CardContext.Provider value={ contextValue }>
            { children }
        </CardContext.Provider>
    );
}
