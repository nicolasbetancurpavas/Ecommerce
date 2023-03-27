import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppUi } from './components/App/AppUi';
import { Context } from './components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#FCFCFA";
root.render(
  <Context>
    <AppUi />
  </Context>
);
