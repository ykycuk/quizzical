import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';

const main = document.getElementById('root')
const root = createRoot(main); 

root.render(<App/>)


