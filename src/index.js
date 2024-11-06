import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
//layout
import Layout from "./Layout";
//home
import Home from "./pages/Home";
//chapters
import Ar from "./pages/Ar";
import Fl from "./pages/Fl";
import La from "./pages/La";
import Sc from "./pages/Sc";
import Tn from "./pages/Tn";
import Tx from "./pages/Tx";
import Wv from "./pages/Wv";
//whoAreWe
import Pledge from "./pages/Pledge";
import Mission from "./pages/Mission";
import History from "./pages/History";
import Goals from "./pages/Goals";
import Benefits from "./pages/Benefits";
//contactUs
import ContactUs from "./pages/ContactUs";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />

          <Route path="ar" element={(<Ar />)} />
          <Route path="fl" element={(<Fl />)} />
          <Route path="la" element={(<La />)} />
          <Route path="sc" element={(<Sc />)} />
          <Route path="tn" element={(<Tn />)} />
          <Route path="tx" element={(<Tx />)} />
          <Route path="wv" element={(<Wv />)} />
          
          <Route path="pledge" element={(<Pledge />)} />
          <Route path="mission" element={(<Mission />)} />
          <Route path="history" element={(<History />)} />
          <Route path="goals" element={(<Goals />)} />
          <Route path="benefits" element={(<Benefits />)} />

          <Route path="contactUs" element={(<ContactUs />)} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
