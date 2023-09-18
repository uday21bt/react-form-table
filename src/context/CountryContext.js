import React, { createContext, useContext, useEffect, useState } from "react";
import { CountryListContext } from "./CountryListContext";

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
    const { countries } = useContext(CountryListContext);

    let [selectedCountry, setSelectedCountry] = useState('India');

    let [countryDetails, setCountryDetails] = useState({
        flagURL: '',
        callingCode: '',
        alpha3Code: ''
    });

    useEffect(() => {
        let country = countries?.filter(country => 
            country.name === selectedCountry
        );

        setCountryDetails({
            flagURL: country[0]?.flags.png,
            callingCode: country[0]?.callingCodes[0],
            alpha3Code: country[0]?.alpha3Code
        });
    }, [selectedCountry]);

    useEffect(() => {
        let country = countries.filter(country => 
            country.name === 'India'
        );

        setCountryDetails({
            flagURL: country[0]?.flags.png,
            callingCode: country[0]?.callingCodes[0],
            alpha3Code: country[0]?.alpha3Code
        });
    }, [countries]);

    const contextValue = { selectedCountry, setSelectedCountry, countryDetails };

    return (
        <CountryContext.Provider value={ contextValue }>
            { children }
        </CountryContext.Provider>
    );
}
