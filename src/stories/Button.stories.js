import React from 'react';
import Button from '../comp/Button';
import {withKnobs, text} from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
}

export const DefaultButton = () => (
    <Button />
);

