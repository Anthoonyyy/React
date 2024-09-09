import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exe1 from "./Composants/exe1";
import Button1 from "./Composants/button1";
import ToDoList from "./ToDoList";
import Count from "./Composants/compteur";
import TypesExample from "./Composants/TypesExample";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error404 from "./Pages/Error404";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Exe1 message = "Hello React 2" /> */}
      {/* <Button1 text = "Hello"  size = "2em" background = "purple" /> */}
      {/*  <Count /> */}
      {/* <ToDoList/> */}
      {/* <TypesExample /> */}

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />}/>
                  <Route path="About" element={<About />}/>
                  <Route path="Contact" element={<Contact />}/>
                  <Route path="*" element={<Error404 />}/>
              </Route>
          </Routes>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
