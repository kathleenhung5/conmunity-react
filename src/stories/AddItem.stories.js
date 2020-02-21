import React from 'react';
import AddItem from '../comp/AddItem';
import {withKnobs, text} from '@storybook/addon-knobs';

export default {
    title: 'Add Item',
    component: AddItem,
    decorators: [withKnobs]
}

export const DefaultAddItem = () => (
    <AddItem />
);

