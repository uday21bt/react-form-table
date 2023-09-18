import React, { useContext } from 'react';
import Button from '../button/button.component';
import { CardContext } from '../../context/CardContext';
import { UsersContext } from '../../context/UsersContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBucket } from '@fortawesome/free-solid-svg-icons'

function UserRow({ user }) {
    const { setShowCard } = useContext(CardContext);
    const { setSelectedUser, deleteUserFeedback } = useContext(UsersContext);

    const selectUser = () => {
        setSelectedUser(user);
        setShowCard(true);
    }

    const handleDeleteUser = () => {
        deleteUserFeedback(user.id);
    }

    return (
        <tr className='user-data'>
            <th className='table-cell delete'>
                <FontAwesomeIcon onClick={handleDeleteUser} className='bucket-icon' icon={faBucket} />
            </th>
            <td className="table-cell detail">
                <Button 
                    buttonText='View details' 
                    type='button' 
                    buttonType='lighter' 
                    onClick={selectUser} 
                />
            </td>
            <td className="table-cell name">{user.name}</td>
            <td className="table-cell email">{user.email}</td>
            <td className="table-cell code">
                <img src={user.nation.flagURL} alt={user.nation.alpha3Code} />
            </td>
            <td className="table-cell phone">{user.phone}</td>
            <td className="table-cell food-quality">{user.serviceRating}</td>
            <td className="table-cell beverage-quality">{user.beverageRating}</td>
            <td className="table-cell cleanliness">{user.cleanlinessRating}</td>
            <td className="table-cell dining">{user.overallRating}</td>
        </tr>
    )
}

export default UserRow;
