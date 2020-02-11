import React from 'react';
import '../App.scss';
import TaskListItem from '../comp/TaskListItem/index.js';

export default {
    title: 'TaskListItem',
    component: TaskListItem
}

export const DefaultTaskListItem = () => (
    <TaskListItem />
);

export const TaskWithAlertWithoutTag = () => (
    <TaskListItem name='My Task' alert={true} tag=""/>
)