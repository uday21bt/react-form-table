import React, { createContext, useEffect, useState } from "react";
import { deleteFeedback, getDataFromCollections, clearFeedbacks } from "../lib/utils/firebase.utils";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(()=> {
        const getUserFeedbacks = async () => {
            const usersData = await getDataFromCollections();
            setUsers(usersData);
        }

        getUserFeedbacks();
    }, []);

    useEffect(() => {
        const getUserFeedbacks = async () => {
            const usersData = await getDataFromCollections();
            setUsers(usersData);
        }

        if (buttonClicked) {
            getUserFeedbacks();
            setButtonClicked(false);
        }
    }, [buttonClicked]);

    const [selectedUser, setSelectedUser] = useState({});

    const clearUserFeedbacks = async () => {
        await clearFeedbacks();
        setButtonClicked(true);
    }

    const deleteUserFeedback = async (userFeedbackID) => {
        await deleteFeedback(userFeedbackID);
        setButtonClicked(true);
    }

    const contextValue = { 
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        clearUserFeedbacks,
        deleteUserFeedback,
        buttonClicked,
        setButtonClicked
    };

    return (
        <UsersContext.Provider value={ contextValue }>
            { children }
        </UsersContext.Provider>
    );
}
