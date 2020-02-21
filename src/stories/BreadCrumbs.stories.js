import React from 'react';
import BreadCrumbsItem from '../comp/BreadCrumbs/BreadCrumbsItem';
import BreadCrumbs from '../comp/BreadCrumbs';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'Bread Crumbs',
    component: BreadCrumbs,
    decorators: [withKnobs]
}

export const DefaultItem = () => (
    <BreadCrumbsItem />
);

export const DefaultBreadCrumbs = () => (
    <BreadCrumbs />
)