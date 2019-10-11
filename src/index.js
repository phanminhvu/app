import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Demo from "./demo";


function App() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Demo} /> 
        </Switch>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );

