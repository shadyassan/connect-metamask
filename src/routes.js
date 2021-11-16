import React from 'react';
import Home from './pages/Home';
import Send from './pages/Send';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/send',
    key: 'ROOT',
    exact: true,
    component: () => <Send />,
  },
];

export default routes;
