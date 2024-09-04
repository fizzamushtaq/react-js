import React, { useContext } from 'react';
import userContext from '../context/Usercontext';

function Profile() {
    const { user } = useContext(userContext);

    if (!user) return <div 
    className='bg-yellow-500 '>Please login</div>;

    return <div>Welcome {user.username}</div>;
}

export default Profile;
