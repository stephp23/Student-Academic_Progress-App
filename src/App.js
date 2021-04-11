import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import GroupByGrade from "./components/GroupByGrades";
import FindLowestAverages from "./components/FindLowestAverages"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/groupbygrade" exact component={GroupByGrade} />
        <Route path="/lowestaverages" exact component={FindLowestAverages} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
