import React, { useContext, useState } from 'react';
import './form-input.styles.scss';
import { CountryListContext } from '../../context/CountryListContext';
import { CountryContext } from '../../context/CountryContext';

function FormInput({ labelText, inputType, inputOptions, errorText }) {
    const { countries } = useContext(CountryListContext);

    const { selectedCountry, setSelectedCountry, countryDetails } = useContext(CountryContext);

    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (country) => {
        setSelectedCountry(country.name);
        setIsOpen(false);
    };

    return (
        <div className='form-group'>
            <label htmlFor={inputOptions.id} className='form-input-label'>
                {labelText}<span>{inputOptions.required && '*'}</span>
            </label>

            {inputType === 'text' && <input className='form-input' {...inputOptions} />}
        
            {inputType === 'number' && 
                <div className='form-dropdown-input'>
                    <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                        {selectedCountry && <img className='button-icon' src={countryDetails?.flagURL} alt={countryDetails?.alpha3Code} />}
                    </button>

                    {isOpen && (
                        <ul className="dropdown-options">
                            {countries.map(country => (
                                <li 
                                    key={country.alpha3Code} 
                                    className="dropdown-option"
                                    onClick={() => handleOptionClick(country)}
                                >
                                    <img className='dropdown-icon' src={country.flags.png} alt={countryDetails.name} />
                                    <p>&#40;+{country.callingCodes}&#41;-{country.alpha2Code}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                    <input className='form-input' {...inputOptions} />
                </div>
            }

            {inputType === 'checkbox' && 
                <div className='checkbox-input-group'>
                    <label className='checkbox-label'>
                        <input 
                            className='checkbox-input'
                            {...inputOptions} 
                            value={inputOptions.value1} 
                            checked={inputOptions.checked === inputOptions.value1} 
                        />
                        {inputOptions.value1}
                    </label>
                    <label className='checkbox-label'>
                        <input 
                            className='checkbox-input'
                            {...inputOptions} 
                            value={inputOptions.value2} 
                            checked={inputOptions.checked === inputOptions.value2} 
                        />
                        {inputOptions.value2}
                    </label>
                    <label className='checkbox-label'>
                        <input 
                            className='checkbox-input'
                            {...inputOptions} 
                            value={inputOptions.value3} 
                            checked={inputOptions.checked === inputOptions.value3} 
                        />
                        {inputOptions.value3}
                    </label>
                    <label className='checkbox-label'>
                        <input 
                            className='checkbox-input'
                            {...inputOptions} 
                            value={inputOptions.value4} 
                            checked={inputOptions.checked === inputOptions.value4} 
                        />
                        {inputOptions.value4}
                    </label>
                </div>
            }

            {errorText && <p className='error-text'>{errorText}</p>}
        </div>
    );
}

export default FormInput;
