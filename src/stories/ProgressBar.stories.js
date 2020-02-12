import React from 'react';
import '../App.scss';
import ProgressBar from '../comp/ProgressBar/index.js';

// Kathleen's comment here
// You want to add this here so that you have a ProgressBar section in the side menu in your storybook.
export default {
  title: 'Progress Bar',
  component: ProgressBar
}


// You want to use something else for the name because "ProgressBar" is already taken

// export const ProgressBar = () => (
  export const DefaultProgressBar = () => (
  // The component name you're importing should be the same
  // <Progress />
  <ProgressBar />
);
