import React from 'react';
import '../App.scss';
import TaskListItem from '../comp/TaskListItem/index.js';
import {withKnobs, boolean,text} from '@storybook/addon-knobs';

export default {
    title: 'TaskListItem',
    component: TaskListItem,
    decorators: [withKnobs]
}

export const DefaultTaskListItem = () => (
    <TaskListItem />
);

export const CustomTaskListItem = () => (
    <TaskListItem 
    name={text('My Task')} alert={boolean("show alert",true)} tag={text("")}/>
)