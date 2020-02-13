import React from 'react';
//import '../App.scss';
import '../comp/Search/search.scss';
import Search from '../comp/Search/index.js';
import {withKnobs, text} from '@storybook/addon-knobs';

export default {
    title: 'Search',
    component: Search,
    decorators: [withKnobs]
}

export const DefaultSearch = () => (
    <Search />
);

//need to figure out how to change the text when inputting
export const CustomSearch = () => (
    <Search 
    searchItem={text('Search Results')}/>
)