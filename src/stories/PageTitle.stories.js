import React from 'react';
import PageTitle from '../comp/PageTitle/';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'Page Title',
    component: PageTitle,
    decorators: [withKnobs]
}

export const DefaultPageTitle = () => (
    <PageTitle />
);
