import React, { useContext, useEffect, useRef } from 'react';
import './user-card.styles.scss';
import Button from '../button/button.component';
import { CardContext } from '../../context/CardContext';

function useOutsideAlerter(ref) {
    const { setShowCard } = useContext(CardContext);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowCard(false);
                console.log('clicked-outside');
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function UserCard({ user }) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const { setShowCard } = useContext(CardContext);

    const hideCard = () => {
        setShowCard(false);
    }

    return (
        <div className='user-card-container' ref={wrapperRef}>
            <p>Feedback from {user.name}</p>

            <div className="user-info">
                <div className="contact-details">
                    <div className="section-head">
                        <p>Contact Details</p>

                        <img src={user.nation.flagURL} alt="" />
                    </div>
                </div>

                <div className="service-rating">
                    <p>Please rate the quality of the service you received from your host.</p>

                    <h2>{user.serviceRating}</h2>
                </div>

                <div className="cleanliness-rating">
                    <p>Was our restaurant clean?</p>

                    <h2>{user.cleanlinessRating}</h2>
                </div>

                <div className="beverage-rating">
                    <p>Please rate the quality of the beverage.</p>

                    <h2>{user.beverageRating}</h2>
                </div>

                <div className="overall-rating">
                    <p>Please rate your overall dining experience.</p>

                    <h2>{user.overallRating}</h2>
                </div>
            </div>

            <Button 
                buttonText='OK' 
                buttonType='lighter' 
                type='button' 
                onClick={hideCard}
            />
        </div>
    );
}

export default UserCard;
