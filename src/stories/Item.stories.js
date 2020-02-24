import React from 'react';
import '../comp/Item/item.scss';
import Item from '../comp/Item/index.js';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'Item',
    component: Item,
    decorators: [withKnobs]
}

export const DefaultItem = () => (
    <Item />
);

export const CustomItem = () => (
    <Item 
    name={text('My Task')} 
    alert={boolean("show alert",true)} 
    tag={text("")} 
    editMode={boolean("Edit mode",false)}
    progress={20}/>
)