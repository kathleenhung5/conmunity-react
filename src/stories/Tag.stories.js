import React from 'react';
import '../App.scss';
import Tag from '../comp/Tag/index.js';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'Tag',
    component: Tag,
    decorators: [withKnobs]
}

export const DefaultTag = () => (
    <Tag />
);

export const CustomTag = () => (
    <Tag tagText={text("")}/>
)