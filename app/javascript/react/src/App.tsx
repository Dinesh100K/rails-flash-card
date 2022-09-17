import React from "react";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>This is App</h1>
      <div>
        <Welcome />
      </div>
    </>
  );
};

export default App;
