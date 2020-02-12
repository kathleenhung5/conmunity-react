import React from 'react';
import '../App.scss';
import SingleComment from '../comp/SingleComment';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'SingleComment',
    component: SingleComment,
    decorators: [withKnobs]
}

export const DefaultComment = () => (
    <SingleComment />
);

export const CustomComment = () => (
    <SingleComment />
)