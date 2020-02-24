import React from 'react';
import '../App.scss';
import ProgressBar from '../comp/ProgressBar';
import {withKnobs,text} from '@storybook/addon-knobs';

export default {
    title: 'Progress Bar',
    component: ProgressBar,
    decorators: [withKnobs]
}

export const DefaultProgressBar= () => (
    <ProgressBar />
);

export const CustomTag = () => (
    <ProgressBar progress={text("progress")}/>
)