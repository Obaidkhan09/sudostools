import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
//Material Imports:

/** @jsxImportSource @emotion/react */
import AppBarDrawer from './components/AppBarDrawer.component';
import SideDrawer from "./components/SideDrawer.component"
//CONTEXT API\
//STYLING:
//const colorBlue = "white";
function App() {
  return (
    // <div style={{ height: "500px" }}>
    //   <h1 css={ css`
    //   padding-top: 32px;
    //   color : ${colorBlue};
    //   font-size : 24px;
    //   `} className={classes.testing}>Hello to GREEN..!!</h1>
    // </div>
      <Router>
        <AppBarDrawer />
        <SideDrawer />
      </Router >
  );
}

export default App;
