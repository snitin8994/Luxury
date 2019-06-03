import React from 'react';
import MainPage from "./components/Mainpage/MainPage"
import './App.css';
import {Route} from "react-router-dom"
import LoginRedirect from "./components/LoginRedirect/LogInRedirect"
import SignupRedirect from "./components/SignupRedirect/SignupRedirect"
import Register from "./components/Register/Register"

function App() {
  return (
    // <Register/>
    <div>
      <Route path="/"  component={MainPage} exact />
      <Route path="/login" component={LoginRedirect} />
      <Route path="/register" component={SignupRedirect} />
    </div>
  );
}

export default App;
