import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const HatPage = () => {
  return <div>Welcom to Hats Page.</div>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
