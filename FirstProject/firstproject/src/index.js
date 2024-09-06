import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Exe1 from "./exe1";
import Button from "./button";
import reportWebVitals from './reportWebVitals';
import ToDoList from "./ToDoList";
import Count from "./compteur";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Exe1 message = "Hello React 2" />
      <Button text = "Hello"  size = "2em" background = "purple" />
      <Count />
    <ToDoList/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
