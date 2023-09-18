import React, { useContext, useState } from 'react';
import './form.styles.scss';
import { v4 as uuidv4 } from 'uuid';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { CountryContext } from '../../context/CountryContext';
import { UsersContext } from '../../context/UsersContext';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePhoneNumber } from '../../lib/utils/validation.util';
import { createFeedbackDoc } from '../../lib/utils/firebase.utils';

function Form() {
    const { setButtonClicked } = useContext(UsersContext);

    const defaultFormFields = {
        name: '',
        email: '',
        phone: '',
        serviceRating: '',
        beverageRating: '',
        cleanlinessRating: '',
        overallRating: '',
        nation: {},
    };

    const defaultFormErrors = {
        nameError: '',
        emailError: '',
        phoneError: '',
        serviceRatingError: '',
        beverageRatingError: '',
        cleanlinessRatingError: '',
        overallRatingError: '',
    };

    const { countryDetails } = useContext(CountryContext);

    const [formInputs, setFormInputs] = useState(defaultFormFields);

    const [formErrors, setFormErrors] = useState(defaultFormErrors);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormInputs({...formInputs, [name]: value});
    }

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const newFormErrors = {};

        if (formInputs.name.trim() === '') {
            newFormErrors.nameError = 'Name is required';
        }

        if (formInputs.email.trim() === '') {
            newFormErrors.emailError = 'Email is required';
        } else {
            if (!validateEmail(formInputs.email)) {
                newFormErrors.emailError = 'Invalid email address';
            }
        }

        if (formInputs.phone.trim() === '') {
            newFormErrors.phoneError = 'Phone is required';
        } else {
            if (!validatePhoneNumber(formInputs.phone)) {
                newFormErrors.phoneError = 'Invalid phone number';
            }
        }

        if (formInputs.serviceRating.trim() === '') {
            newFormErrors.serviceRatingError = 'This input is required';
        }
        if (formInputs.beverageRating.trim() === '') {
            newFormErrors.beverageRatingError = 'This input is required';
        }
        if (formInputs.cleanlinessRating.trim() === '') {
            newFormErrors.cleanlinessRatingError = 'This input is required';
        }
        if (formInputs.overallRating.trim() === '') {
            newFormErrors.overallRatingError = 'This input is required';
        }

        if (Object.keys(newFormErrors).length === 0) {
            const feedback = {...formInputs, nation: countryDetails, id: uuidv4()};
            await createFeedbackDoc(feedback);
            setButtonClicked(true);
            setFormInputs(defaultFormFields);
            navigate('/success');
        } else {
            setFormErrors(newFormErrors);
        }
    }

    return (
        <form action="" className='form-container'>
            <FormInput 
                labelText='Customer Name' 
                inputType='text' 
                errorText={formErrors.nameError} 
                inputOptions={{
                    placeholder: 'Your name',
                    type: 'text',
                    required: true,
                    id: 'name',
                    name: 'name',
                    onChange: changeHandler,
                    value: formInputs.name,
                }}
            />

            <FormInput 
                labelText='Email' 
                inputType='text' 
                errorText={formErrors.emailError} 
                inputOptions={{
                    placeholder: 'Your email',
                    type: 'email',
                    required: true,
                    id: 'email',
                    name: 'email',
                    onChange: changeHandler,
                    value: formInputs.email
                }}
            />

            <FormInput 
                labelText='Phone' 
                inputType='number' 
                errorText={formErrors.phoneError} 
                inputOptions={{
                    placeholder: 'Phone number',
                    type: 'number',
                    required: true,
                    id: 'phone',
                    name: 'phone',
                    onChange: changeHandler,
                    value: formInputs.phone
                }}
            />
            
            <div></div>

            <FormInput 
                labelText='Please rate the quality of the service you received from your host.' 
                inputType='checkbox' 
                errorText={formErrors.serviceRatingError} 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'serviceRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.serviceRating
                }}
            />

            <FormInput 
                labelText='Please rate the quality of the beverage.' 
                inputType='checkbox' 
                errorText={formErrors.beverageRatingError} 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'beverageRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.beverageRating
                }}
            />

            <FormInput 
                labelText='Was our restaurant clean?' 
                inputType='checkbox' 
                errorText={formErrors.cleanlinessRatingError} 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'cleanlinessRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.cleanlinessRating
                }}
            />

            <FormInput 
                labelText='Please rate your overall dining experience.' 
                inputType='checkbox' 
                errorText={formErrors.overallRatingError} 
                inputOptions={{
                    required: true,
                    type: 'checkbox',
                    name: 'overallRating',
                    value1: 'Excellent',
                    value2: 'Good',
                    value3: 'Fair',
                    value4: 'Bad',
                    onChange: changeHandler,
                    checked: formInputs.overallRating
                }}
            />

            <div></div>

            <Button 
                buttonText='Submit Review' 
                type='submit' 
                buttonType='regular' 
                onClick={submitHandler} 
            />
        </form>
    )
}

export default Form;
