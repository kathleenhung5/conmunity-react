import React from 'react';
import '../App.scss';
import PageTitle from '../comp/PageTitle/index.js';

export default {
  title: 'Page Title',
  component: PageTitle
}

export const DefaultPageTitle = () => (
  <PageTitle />
);