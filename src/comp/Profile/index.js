import React, {useState} from 'react';
import {IoMdPerson} from 'react-icons/io';

function Profile({companyName, username, onClick}){
    return(
        <div onClick={onClick} className="profile">
            <IoMdPerson className="profile-icon"/>
            <div>
                <h2 className="">{companyName}</h2>
                <h4>{username}</h4>
            </div>
        </div>
    )
}

Profile.defaultProps = {
    companyName: 'Company Name',
    username: 'Username',
    onClick: ()=>{}
}

export default Profile;

