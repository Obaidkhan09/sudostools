import React from 'react';
import {
  BrowserRouter as Switch,
} from "react-router-dom";
import './App.css';

/** @jsxImportSource @emotion/react */
import AppBarDrawer from './components/AppBarDrawer.component';
import SideDrawer from "./components/SideDrawer.component"

function App() {
  return (
      <Switch>
        <AppBarDrawer />
        <SideDrawer />
      </Switch >
  );
}

export default App;
