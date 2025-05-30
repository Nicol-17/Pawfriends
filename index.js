import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import './i18n';
import App from './App';
import "./src/config/i18next.config"


const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);