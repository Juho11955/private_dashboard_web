import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import Dashboard from './pages/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = [
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Dashboard",
    element:<Dashboard/>
  }
]
const RouterObject = createBrowserRouter(router) 
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={RouterObject} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
