import React from 'react';
import '../App.scss';
import ProgressBar from '../comp/ProgressBar/index.js';
import '../comp/ProgressBar/progressbar.scss';

export default {
  title: 'Progress Bar',
  component: ProgressBar
}


export const DefaultProgressBar = () => (
  <ProgressBar />
);
