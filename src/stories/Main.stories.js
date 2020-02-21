import React from 'react';
import '../App.scss';
import Main from '../pages/Main';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'Main',
    component: Main,
    decorators: [withKnobs]
}

export const DefaultMainPage = () => (
    <Main />
);
