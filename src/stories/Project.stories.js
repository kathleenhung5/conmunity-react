import React from 'react';
import '../App.scss';
import Project from '../comp/Project/index.js';

export default {
    title: 'Project',
    component: Project
}

export const DefaultProject = () => (
    <Project />
);

export const CustomProject = () => (
    <Project name="My Project" progress={50} code="S2KW3L"/>
);