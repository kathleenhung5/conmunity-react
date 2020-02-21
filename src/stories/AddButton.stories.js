import React from 'react';
import '../App.scss';
import AddButton from '../comp/AddButton';
import {withKnobs,text} from '@storybook/addon-knobs';

export default {
    title: 'Add Button',
    component: AddButton,
    decorators: [withKnobs]
}

export const DefaultAddButton = () => (
    <AddButton />
);

export const CustomAddButton = () => (
    <AddButton text={text("Button Text")}/>
);

