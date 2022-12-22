import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/About';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path: '/',
    element:<App/>,
  },
  {
    path: 'about',
    element:<About/>,
  },
  {
    path: 'cart',
    element:<Cart/>,
  }
])

root.render(
    <React.StrictMode>
     <RouterProvider router={(router)}/>
    </React.StrictMode>

);

