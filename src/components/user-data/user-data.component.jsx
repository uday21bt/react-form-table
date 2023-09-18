import React, { useContext } from 'react';
import './user-data.styles.scss';
import { UsersContext } from '../../context/UsersContext';
import UserRow from '../user-row/user-row.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBucket } from '@fortawesome/free-solid-svg-icons'

function UserData() {
    const { users, clearUserFeedbacks } = useContext(UsersContext);

    const handleClearUsers = () => {
        clearUserFeedbacks();
    }

    return (
        <div className='user-data-component-container'>
            <table className="user-data-table-container">
                <thead>
                    <tr className='data-header'>
                        <th className='table-cell delete'>
                            <FontAwesomeIcon onClick={handleClearUsers} className='bucket-icon' icon={faBucket} />
                        </th>
                        <th className="table-cell detail">Form Details</th>
                        <th className="table-cell name">Customer Name</th>
                        <th className="table-cell email">Email</th>
                        <th className="table-cell code">Country Code</th>
                        <th className="table-cell phone">Phone</th>
                        <th className="table-cell food-quality">Please rate the quality of the service you received from your host.</th>
                        <th className="table-cell beverage-quality">Please rate the quality of the beverage.</th>
                        <th className="table-cell cleanliness">Was our restaurant clean?</th>
                        <th className="table-cell dining">Please rate your overall dining experience.</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => {
                        return (
                            <UserRow 
                                key={user.phone} 
                                user={user} 
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserData;
