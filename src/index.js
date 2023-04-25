import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './stylesheets/index.css'

//import components
import Layout from "./routes/Layout"
import DetailView from './routes/DetailView';
import CreatePost from './pages/CreatePost';
import ReadPosts from './pages/ReadPosts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);