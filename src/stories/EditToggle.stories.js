import React from 'react';
import '../App.scss';
import EditToggle from '../comp/EditToggle/index.js';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'EditToggle',
    component: EditToggle,
    decorators: [withKnobs]
}

export const DefaultEditToggle = () => (
    <EditToggle editMode={"edit mode",boolean(true)}/>
);
