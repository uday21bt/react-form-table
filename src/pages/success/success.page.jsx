import React from 'react';
import './success.styles.scss';
import Button from '../../components/button/button.component';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
    const navigate = useNavigate();

    const routeHandler = () => {
        navigate('/view-data');
    }

    return (
        <div className='success-page-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" fill="rgba(72,164,76,255)" className="bi bi-check-circle-fill tick-shadow" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
            
            <h1>Thank you for providing the feedback</h1>

            <h2>We will work towards improving your experience</h2>

            <Button 
                buttonText='Close' 
                type='button' 
                buttonType='green' 
                onClick={routeHandler} 
            />
        </div>
    )
}

export default SuccessPage;
