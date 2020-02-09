import React from 'react';
import '../App.scss';
import Profile from '../comp/Profile/index.js';

export default {
    title: 'Profile',
    component: Profile
}

export const DefaultProfile = () => (
    <Profile />
);

export const CustomProfile = () => (
    <Profile companyName="My Company" username="My Name"/>
);