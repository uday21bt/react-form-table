import React, { useContext } from 'react';
import './view-data.styles.scss';
import Button from '../../components/button/button.component';
import { useNavigate } from 'react-router-dom';
import UserData from '../../components/user-data/user-data.component';
import UserCard from '../../components/user-card/user-card.component';
import { CardContext } from '../../context/CardContext';
import { UsersContext } from '../../context/UsersContext';

function ViewDataPage() {
    const navigate = useNavigate();

    const { showCard } = useContext(CardContext);

    const { selectedUser } = useContext(UsersContext);

    const routeHandler = () => {
        navigate('/');
    }

    return (
        <div className='view-data-page-container'>
            <div className="view-data-page-header">
                <h1 className="view-data-page-title">Aromatic bar</h1>

                <Button 
                    buttonText='Add new data' 
                    type='button' 
                    buttonType='green' 
                    onClick={routeHandler} 
                />
            </div>

            <UserData />

            {showCard && <UserCard user={selectedUser} />}
        </div>
    );
}

export default ViewDataPage;
